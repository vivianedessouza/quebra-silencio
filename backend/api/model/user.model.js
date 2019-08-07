module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
          },
	  name: {
		  type: Sequelize.STRING
	  },
      username: {
		  type: Sequelize.STRING
	  },
	  email: {
		  type: Sequelize.STRING
	  },
	  password: {
		  type: Sequelize.STRING
      },
        
      status_id: {
          type: Sequelize.INTEGER,
          primaryKey: false
      },
      profile_img: {
          type: Sequelize.STRING
      },
      document_img: {
          type: Sequelize.STRING
      },
      role_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      phone: {
          //string for "+" limit 13
          type: Sequelize.STRING
      },
      state_id:{
        type: Sequelize.INTEGER,
        primaryKey: false
    },
    approved:{
        type: Sequelize.INTEGER,
        primaryKey: false
    } 
    }
        );
  
    //profile information with joins
    User.getProfile = function(req, res){

        sequelize.query("SELECT users.id, users.name, users.username, users.email, status.civil_status, states.state, users.phone, users.profile_img, users.document_img, roles.front_name as role FROM users INNER JOIN roles ON users.role_id = roles.id INNER JOIN status ON users.status_id = status.id INNER JOIN states ON users.state_id = states.id WHERE users.id = :id", { replacements: { id: req.params.id}, type: sequelize.QueryTypes.SELECT })
        .then(user => {
                res.status(200).json({
                    user: user
                    })
                })      
    };



        User.associate = function(models) {
          
          User.hasMany(Case, {foreignKey: 'profile_id'});
        };
   
	return User;
}