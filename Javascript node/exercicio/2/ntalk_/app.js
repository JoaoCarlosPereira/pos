var express = require('express')
, app = express();

var load = require('consign');
load().include('models')
.then('controllers')
.then('routes')
.into(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.listen(3000, function(){
	console.log('NTalk no ar.');
});
