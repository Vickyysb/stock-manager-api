const Sequelize = require("sequelize");

const connection = new Sequelize('api-manager', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

//test connection to database
// connection
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

module.exports = connection;