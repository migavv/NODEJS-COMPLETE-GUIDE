const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.setHeader('content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>First Task</title><head>');
        res.write('<body><h1>Welcome!</h1></body>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Add user</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/users') {
        res.setHeader('content-Type', 'text/html');
        res.write('<html>');
        res.write('<body><ul><li>User 1</li></ul></body>');
        res.write('</html>');
        res.end();
    }
    if(url === '/create-user' && method == 'POST') {
        const body = [];
        req.on('data', (chunk) => {body.push(chunk)});
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split('=')[1];
            console.log(user);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
}

module.exports = requestHandler;