var fs = require('fs');
var arquivo = require('path');

module.exports = function(NomeArquivo, Extencao, callback) {
  var extension = "." + Extencao;
  fs.readdir(NomeArquivo, function(err, files) {
    if (err) {
      callback(err, null);
    }
    else {
      result = [];
      files.forEach(function(entry) {
        if (arquivo.extname(entry) == extension) {
          result.push(entry);
        }
      });
      callback(null, result);
    }
  });
  
};