var restify = require('restify'); //Va a usar el módulo restify creado antes con el npm install

var config = require('./config.js');

var usuarios = require('./users.js');

var server = restify.createServer({
	name: 'testServer'
});

server.use(restify.queryParser());			//Siempre se usa cuando se trabaja con Restify
server.use(restify.bodyParser());			//Siempre se usa cuando se trabaja con Restify
server.use(restify.fullResponse());			//Siempre se usa cuando se trabaja con Restify

server.listen(config.server_port, config.server_ip, function()
{
	console.log('%s activo en %s', server.name, server.url);
});

var HelloModel= function(req,res,next){
	res.send(200, 'Hola mundo');
	return next();
};

server.get({
	path:'/',
	version:'1.0.0'
}, HelloModel); 						//Restify = server de apis//

usuarios(server);