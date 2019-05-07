module.exports = (sequelize, Sequelize) => {
    const Help = sequelize.define('help', { 
    
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
	    },
	    help_type: {
		    type: Sequelize.STRING
	  }
    });
	
	return Help;
}