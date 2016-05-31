var express = require('express'),
	server = express();

server.use(express.static('public'));


server.get('/', function(req,res,next)
{
	res.send('hello world');
});

server.listen(3000, function(){
	console.log('Example app listening on port 3000');
});