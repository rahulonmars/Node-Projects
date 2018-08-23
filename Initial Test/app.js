const http = require('http');
const hostname = '127.0.0.1';
const port = 1234;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hi There !\n');
});

server.listen(port, hostname, () => {
    console.log('Server started at http://%s:%d/',hostname,port);
});