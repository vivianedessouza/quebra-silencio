module.exports = (sequelize, Sequelize) => {
    const Message = sequelize.define('messages', { 
    
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        case_id: {
            type: Sequelize.INTEGER,
            primaryKey: false
        },
        pro_id: {
            type: Sequelize.INTEGER,
            primaryKey: false
        },
        user_id: {
            type: Sequelize.INTEGER,
            primaryKey: false
        },
        replied_by: {
            type: Sequelize.INTEGER,
            primaryKey: false
	    },
	    reply: {
		    type: Sequelize.STRING
	  }
    
 });

 //gets all messages base on case id and pro id
 Message.getMessages = function(req, res){
    sequelize.query("SELECT messages.reply, messages.createdAt, users.name FROM messages INNER JOIN users ON messages.replied_by = users.id WHERE messages.case_id = :id AND pro_id = :pro_id", { replacements: { id: req.params.id, pro_id: req.body.pro_id}, type: sequelize.QueryTypes.SELECT })
    .then( info => {

      res.status(200).json({
          messages: info
      })

    }).catch(err => {
        res.status(500).json({
            "error": err
        });
    })
  };

	return Message;
}