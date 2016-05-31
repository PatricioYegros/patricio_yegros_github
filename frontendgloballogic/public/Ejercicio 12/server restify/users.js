module.exports = function(server)
{
	var UsersModel= function()
	{
		var usuarios = [{
			name: 'pablo',
			email: 'pablo.petran@globallogic.com',
			comment: ' a'
		},
		{
			name:'agustin',
			email:'agustin.diaz@gl.com',
			comment: 'v '
		}];
		this.getUser=function(req,res,next){  //Req = request al servidor Res= respuesta al servidor Next= para seguir
			console.log(req.body);
			var userId=req.params.id;
			if(usuarios[userId]){
				res.send(200,usuarios[userId]);
			}
			else
			{
				res.send(404,'Error, usuario invalido');
			}
			return next();					  // Siempre se hace un return next
		};
		this.editUser=function(req,res,next){
			var userId=req.params.id,
				newName = req.params.name;
				if(usuarios[userId])
				{
				usuarios[userId].name=newName;
				res.send(200,usuarios[userId]);
			}	
			return next();
		};
		this.addUser=function(req,res,next)
		{
			var userId= req.params.id;
				user.name= req.params.name;
				user.email=req.params.email;
				usuarios.push(user);
			if(usuarios[userId])
			{
				res.send(200, 'Usuario agregado correctamente');	
			}
			else
			{
				res.send(404,'Error, usuario invalido');
			}
		return next();
		};
		this.addComment=function(req,res,next)
		{
			var userId=req.params.id;
				newComment=req.params.comment;
			if(usuarios[userId])
			{
				usuarios[userId].comment=newComment;
				res.send(200,usuarios[userId]);
			}
			else
			{
				res.send(404, 'Error al agregar comentario');
			}
		return next();
		};
		this.listComment=function(req,res,next)
		{
			var i;
			var vectorComments = [];

			for(i=0;i<usuarios.length;i++)
			{
				vectorComments[i]=usuarios[i].comment;
			}
		res.send(200,vectorComments);
		return next();
		};
		this.listUser=function(req,res,next)
		{
			res.send(200,usuarios);
			return next();
		}
		this.deleteUser=function(req,res,next)
		{
			
		}
	};

	var User = new UsersModel();

	server.get({
		path:'/list',
		version:'1.0.0'
	}, User.listUser);

	server.get({
		path:'/comment/list',
		version:'1.0.0'
	}, User.listComment);

	server.get({
		path:'/users/:id',
		version: '1.0.0'
	}, User.getUser);

	server.post({
		path:'/comment/:id', 
		version:'1.0.0'
	},  User.addComment);

	server.post({
		path:'/users/:id',
		version: '1.0.0'
	}, User.editUser);

	server.put({
		path:'/users/:id',
		version:'1.0.0'
	}, User.addUser);

};


/* AGREGAR, EDITAR, LISTAR COMENTARIOS POR USUARIO
LISTAR USUARIOS */