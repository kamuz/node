import http from 'http';

const port = 8000;

const server = http.createServer((req, res) => {
    res.writeHead(500, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: 'Server Error'}));
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});