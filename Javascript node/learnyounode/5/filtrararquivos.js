var fs = require('fs');

var arquivo = fs.readdir(process.argv[2], 'utf8', function (err, list) {
    if (!err) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i].search('.'+process.argv[3]) >= 0) {
                console.log(list[i]);
            }
        }
    }

});