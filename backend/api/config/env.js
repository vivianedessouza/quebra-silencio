//database connection details
const env = {
    database: 'S4aAOlGDeh',
    username: 'S4aAOlGDeh',
    password: 'FVwNKiYCOm',
    host: 'remotemysql.com',
    dialect: 'mysql',

    //sequelize pool
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  };
   
module.exports = env;
  