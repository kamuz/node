import http from 'http';

const port = 8000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404;
    res.end('<h1>Hello, Node.js</h1>');
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});