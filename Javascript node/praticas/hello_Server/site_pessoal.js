const http = require('http');
const fs = require('fs');
 
const server = http.createServer((request, response) => {
  // __dirname retorna o diretório raíz da aplicação.

   const lerDiretorio = (err, html) =>{ 	
   		response.writeHeader(200, {'Content-Type': 'text/html'});
    	response.write(html);
   		response.end();
	};
   console.log(__dirname);
    fs.readFile(__dirname + '/artigo.html', (err, html) => lerDiretorio(err, html));

server.listen(3000, () => {
  console.log('Executando Site Pessoal');
});