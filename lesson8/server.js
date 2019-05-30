// Load modules
const http = require('http');

const server = http.createServer((req, res) => {
    let log = `
        URL: ${req.url},
        Method: ${req.method},
        Headers: ${JSON.stringify(req.headers)},
        Cookies: ${req.cookies}`
        console.log(log);
    res.end('Hello NodeJS!');
});

server.listen(4000);
console.log('Server running on port: 4000');