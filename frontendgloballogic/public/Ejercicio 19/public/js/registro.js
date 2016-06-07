$(function(){
 var form = $('.container');
 $('.enviar').on('click',addUser);

 function addUser(e){
 	e.preventDefault();
  var user = {
  		firstName: form.find('#nombre').val(),
  		lastName: form.find('#apellido').val(),
  		gender: form.find('#sexo').val(),
  		birthday: form.find('#date').val(),
  		address: form.find('#domicilio').val(),
  		photo: form.find('#foto').val(),
  		email: form.find('#mail').val(),
  		password: form.find('#contraseña').val(),
  		education: form.find('#educacion').val(),
  		experience: form.find('#experiencia').val(),
  };
  console.log(user);
  $.ajax({ 
   url:'https://connectedin.herokuapp.com/person',
   method:'POST',
   data: JSON.stringify(user),
   contentType: 'application/json',
   success: function(data){
    	alert('User Added');
   }
  });
  return false;
 }; 
  //cierra agregar usuario

  function listar(e)
  {
  	e.preventDefault();
  $.ajax({
  	url:'https://connectedin.herokuapp.com/person',
	method:'GET',  
	success: function(data)
	{
		var myDiv = '<div id="ess">';
   	 	for(var i =0 ; i< data.length;i++)
   			{
    			 var replacing = data[i]._id + data[i].firstName;
    			 myDiv += replacing;
  				 myDiv += '<br>'+'<br>';
   	    	}
   		myDiv += '</div>'
 	    $("#jejeje").append(myDiv)
   }




  });
  }















});



