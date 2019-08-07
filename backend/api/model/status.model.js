module.exports = (sequelize, Sequelize) => {
    const Status = sequelize.define('status', { 
    
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
	    },
	    civil_status: {
		    type: Sequelize.STRING
	  }
    
     
       },
       {
            tableName: 'status'
        
          });

	
	return Status;
}