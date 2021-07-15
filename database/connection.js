const Sequelize = require("sequelize");

const connection = new Sequelize('api-manager', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

//PARA ATUALIZAR AS TABELAS DELETANDO TODOS OS DADOS > force:true
// connection.query('SET FOREIGN_KEY_CHECKS = 0')
// .then(function(){
//     return connection.sync({ force: false });
// })
// .then(function(){
//     return connection.query('SET FOREIGN_KEY_CHECKS = 1')
// })
// .then(function(){
//     console.log('Database synchronised.');
// }, function(err){
//     console.log(err);
// });

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