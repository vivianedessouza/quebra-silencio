//database details
const env = require('./env.js');

//ORM - Sequelize
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,
   
    pool: {
      max: env.max,
      min: env.pool.min,
      acquire: env.pool.acquire,
      idle: env.pool.idle
    }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//connect db to models
db.status = require('../model/status.model.js')(sequelize, Sequelize);
db.states = require('../model/states.model.js')(sequelize, Sequelize);
db.help = require('../model/help.model.js')(sequelize, Sequelize);

db.user = require('../model/user.model.js')(sequelize, Sequelize);
db.role = require('../model/role.model.js')(sequelize, Sequelize);
db.case = require('../model/case.model.js')(sequelize, Sequelize);
db.message = require('../model/message.model.js')(sequelize, Sequelize);


module.exports = db;