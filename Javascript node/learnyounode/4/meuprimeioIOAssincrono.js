var fs = require('fs');

var arquivo = fs.readFile(process.argv[2], function (err, data) {
    console.log(data.toString().split('\n').length - 1);
});