const express = require('express');
const server = express();
const config = require('./config/config.js');
const { hostname, port } = config;


server.get('/', (req, res) => {
    res.send("Server running ! ")
})

function startServer (routes) {
    server.use(routes);
    server.listen(port, hostname, () => { 
        console.log(`Server running at http://${hostname}:${port}/`);
    })
}

module.exports={ startServer }