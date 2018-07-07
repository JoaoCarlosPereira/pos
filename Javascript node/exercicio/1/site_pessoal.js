const http = require('http');
const fs = require('fs');
 
const server = http.createServer((request, response) => {
  // __dirname retorna o diretório raíz da aplicação.

   const ExecutarArquivo = (err, html) => { 	
   		response.writeHeader(200, {'Content-Type': 'text/html'});
    	response.write(html);
   		response.end();
	};
   
	if((request.url === '/') || (request.url === '/artigo')) {
	  fs.readFile(__dirname + '/artigo.html', ExecutarArquivo);
	} else if (request.url === '/contato') {
	  fs.readFile(__dirname + '/contato.html',ExecutarArquivo);
	} else {
	  fs.readFile(__dirname + '/erro.html', ExecutarArquivo);
	}

});

server.listen(3000, () => {
  console.log('Executando Site Pessoal');
});