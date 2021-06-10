const express = require('express');
const server = express();
const config = require('./config/config.js');

const { hostname, port } = config;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

server.get('/', (req, res) => {
    res.send("Server running ! ")
})

function startServer () {
    server.listen(port, hostname, () => { 
        console.log(`Server running at http://${hostname}:${port}/`);
    })
}

module.exports={ startServer }


