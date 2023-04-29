const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Voilà la réponse du serveur !");
})

/**
 * If different port is specified by host, use it, else use port 3000.
 */
server.listen(process.env.PORT || 3000);