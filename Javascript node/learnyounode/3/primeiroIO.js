var fs = require('fs');

var arquivo = fs.readFileSync(process.argv[2]);

console.log(arquivo.toString().split('\n').length - 1);


