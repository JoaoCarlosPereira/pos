const http = require('http');

const server = http.createServer((request, response) => {
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write('<h1>Hello world!</h1>');
		response.end();Q
});

server.listen(3000, () => {
   console.log('Servidor Hello world rodando!');
});