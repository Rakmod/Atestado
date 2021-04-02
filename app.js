const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end("Hello");
});

server.listen(port, () => {
    console.log("Server started listening on port: " + port);
});

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated')
    })
})