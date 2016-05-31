var express = require('express'),
  server = express(),
  bodyParser = require('body-parser'),
  personas = [
  {   
      id:1,
      nombre:'Persona1',
      edad: 5,
      email:'persona1@sarasa.com'
  },
  {   
      id:2,
      nombre:'Persona2',
      edad: 10,
      email:'persona2@sarasa.com'
  },
  {
      id:3,
      nombre:'Persona3',
      edad: 15,
      email:'persona3@sarasa.com'
  },
  {
      id:4,
      nombre:'Persona4',
      edad: 20,
      email:'persona4@sarasa.com'
  },
  {
      id:5,
      nombre:'Persona5',
      edad: 25,
      email:'persona5@sarasa.com'
  },];

server.use(express.static('public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true })); 

 //listar todas las personas
 server.get('/personas',function(req,res,next)
 {
      res.send(personas);  //LO QUE ESTA ENTRE PARENTESIS, LLAMA A LA URL DEL .JS
 });

 server.post('/personas',function(req,res,next)
 {
      var persona={};   //Creo variable
      persona.id=req.body.id;           //Lleno los atributos de la variable
      persona.nombre=req.body.nombre;
      persona.edad=req.body.edad;
      persona.email=req.body.email;
      personas.push(persona);           //Ingresa la variable "persona" al array "personas"
      res.send(persona);       //Confirmo que se agregó bien el usuario
      return next();
 });

 server.get('/personas/id',function(req,res,next)
 {
      res.send(personas);
 });

 server.delete('/personas',function(req,res,next)
{
    var personaId=req.body.id;
    var i = 0;
    while (i < personas.length-1 && personas[i].id != userId)
    {
    i++;
    }
  
  //Si lo encontró lo elimino sino mando mensaje error
  if(personas[i].id == userId){
    delete personas[i];
    res.send (200, 'Usuario eliminado.');
    personas = personas.filter( function(persona) 
    { return !!persona; });  // al usar delete, deja el espacio 
    }                                                                        // en undefined. Con el filter, filtro con "!!"
  else
  {                                                                    // que hace true el "undefined" y el "null"
    res.send(404, 'El usuario no existe, no se puede eliminar.');
  }
  return next();
});
};

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});