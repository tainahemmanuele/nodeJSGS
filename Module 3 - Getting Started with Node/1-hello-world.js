const http = require('http');
//var port = 3000;

const server = http.createServer((req, res) => {
    res.end('Hello World\n');
});

server.listen(4242, ()=> {
    console.log('Server is running...');
})
