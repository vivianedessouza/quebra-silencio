module.exports = (sequelize, Sequelize) => {
    const States = sequelize.define('states', { 
    
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
	    },
	    state: {
		    type: Sequelize.STRING
	  }
     
       });
	
	return States;
}