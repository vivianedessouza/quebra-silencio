module.exports = (sequelize, Sequelize) => {
	const Case = sequelize.define('cases', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
       primaryKey: true
    },
    profile_id: {
      type: Sequelize.INTEGER,
      foreignKey: true
    },
	  description: {
		  type: Sequelize.STRING
    },
    help_type: {
        type: Sequelize.STRING
    },
    accepted_law: {
      type: Sequelize.INTEGER,
      primaryKey: false
    },
    accepted_psy: {
      type: Sequelize.INTEGER,
      primaryKey: false
    },
    accepted_by_law: {
      type: Sequelize.STRING
    },
    accepted_by_psy: {
      type: Sequelize.STRING
    }

  });

  //get case info
  Case.getCase = function(req, res){
    sequelize.query("SELECT cases.description, help.help_type as help, cases.accepted_law, cases.accepted_psy, cases.accepted_by_law, cases.accepted_by_psy, users.name as professional_law FROM cases INNER JOIN users ON cases.accepted_by_law = users.id INNER JOIN help ON cases.help_type = help.id WHERE cases.profile_id = :id", { replacements: { id: req.params.id}, type: sequelize.QueryTypes.SELECT })
    .then( info => {

      res.status(200).json({
          details: info
      })

    })      
  };

  //get all unaccepted cases - law or both
  Case.getunacceptedLaw = function(req, res){
    sequelize.query("SELECT cases.description, users.state_id, users.status_id FROM cases INNER JOIN users ON cases.profile_id = users.id WHERE cases.accepted_law = :unaccepted AND (help_type = :law OR help_type = :all)", { replacements: { unaccepted: 0, law: 1, all: 3}, type: sequelize.QueryTypes.SELECT })
    .then(info => {

      res.status(200).json({
        info: info
      })

    })
    .catch(err => {

      res.status(500).json({
        "error": err
      })
    
    })
  };

  //get all unaccepted cases - psy or both
  Case.getunacceptedPsy = function(req, res){
    sequelize.query("SELECT cases.description, users.state_id, users.status_id FROM cases INNER JOIN users ON cases.profile_id = users.id WHERE cases.accepted_psy = :unaccepted AND (help_type = :psy OR help_type = :all)", { replacements: { unaccepted: 0, psy: 2, all: 3}, type: sequelize.QueryTypes.SELECT })
    .then(info => {

      res.status(200).json({
        info: info
      })

    })
    .catch(err => {

      res.status(500).json({
        "error": err
      })
    
    })
  };

  //user gets information from who accepted his/her case
  Case.getacceptedCasesUser = function(req, res){
    sequelize.query("SELECT users.name, roles.front_name as role FROM cases INNER JOIN users ON cases.accepted_by_law = users.id INNER JOIN roles ON users.role_id = roles.id WHERE cases.profile_id = :id UNION SELECT users.name, roles.front_name as role FROM cases INNER JOIN users ON cases.accepted_by_psy = users.id INNER JOIN roles ON users.role_id = roles.id WHERE cases.profile_id = :id", { replacements: { id: req.params.id }, type: sequelize.QueryTypes.SELECT })
    .then(acceptedCases => {

      res.status(200).json({
        "accepted cases": acceptedCases
      })

    })
    .catch(err => {

      res.status(500).json({
        "error": err
      })
    
    })
  };

  //professional law gets victims information - accepted cases
  Case.getacceptedCasesLaw = function(req, res){
    sequelize.query("SELECT users.name, status.civil_status, states.state FROM cases INNER JOIN users ON cases.profile_id = users.id INNER JOIN status ON users.status_id = status.id INNER JOIN states ON users.state_id = states.id WHERE cases.accepted_by_law = :id AND cases.profile_id = users.id", { replacements: { id: req.params.id }, type: sequelize.QueryTypes.SELECT })
    .then(acceptedCases => {

      res.status(200).json({
        "accepted cases": acceptedCases
      })

    })
    .catch(err => {

      res.status(500).json({
        "error": err
      })
    
    })
  };

  //professional psy gets victims information - accepted cases
  Case.getacceptedCasesPsy = function(req, res){
    sequelize.query("SELECT users.name, status.civil_status, states.state FROM cases INNER JOIN users ON cases.profile_id = users.id INNER JOIN status ON users.status_id = status.id INNER JOIN states ON users.state_id = states.id WHERE cases.accepted_by_psy = :id AND cases.profile_id = users.id", { replacements: { id: req.params.id }, type: sequelize.QueryTypes.SELECT })
    .then(acceptedCases => {

      res.status(200).json({
        "accepted cases": acceptedCases
      })

    })
    .catch(err => {

      res.status(500).json({
        "error": err
      })
    
    })
  };



  return Case;
}