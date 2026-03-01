import http from 'http';

const port = process.env.PORT;

const users = [
    {id: 1, name: 'John Smith'},
    {id: 2, name: 'Sara Connor'},
    {id: 3, name: 'Volodymyr Kamuz'},
];

const server = http.createServer((req, res) => {
    if(req.url === '/api/users' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(users));
        res.end();
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 404;
        res.write(JSON.stringify({message: 'Route not found'}));
        res.end();
    }
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});