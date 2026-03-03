import http from 'http';

const port = process.env.PORT;

const users = [
    {id: 1, name: 'John Smith'},
    {id: 2, name: 'Sara Connor'},
    {id: 3, name: 'Volodymyr Kamuz'},
];

// Logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const server = http.createServer((req, res) => {
    logger(req, res, () => {
        if(req.url === '/api/users' && req.method === 'GET') {
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(users));
            res.end();
        } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
            res.setHeader('Content-Type', 'application/json');
            const id = req.url.split('/')[3];
            // console.log(id);
            const user = users.find((user) => user.id === parseInt(id));
            // console.log(user);
            if(user){
                // res.write(JSON.stringify({ id: 1, name: 'Jonh Dou'}));
                res.write(JSON.stringify(user));
            } else {
                res.statusCode = 404;
                res.write(JSON.stringify({message: 'User not found'}));
            }
            res.end();
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 404;
            res.write(JSON.stringify({message: 'Route not found'}));
            res.end();
        }
    })
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});