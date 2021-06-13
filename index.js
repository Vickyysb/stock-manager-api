const server = require('./server.js');
const routes = require('./src/routes/index.js');

server.startServer(routes);