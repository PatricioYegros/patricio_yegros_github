$(function(){
 var form = $('.container');
 $('.enviar').on('click',addUser);
 $('.mostrarLista').on('click',listar);

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
		var myDiv = '<tr>' +
                '<td>' + '<strong>' + 'ID ' + '</strong>' + '</td>' +
                '<td>' + '<strong>' + 'First Name ' + '</strong>' + '</td>'+
                '<td>' + '<strong>' + 'Last Name ' + '</strong>' + '</td>'+
                '<td>' + '<strong>' + 'Gender ' + '</strong>' + '</td>'+
                '<td>' + '<strong>' + 'Birthday ' + '</strong>' + '</td>'+
                '<td>' + '<strong>' + 'Address ' + '</strong>' + '</td>'+
                '<td>' + '<strong>' + 'Photo ' + '</strong>' + '</td>'+
                '<td>' + '<strong>' + 'Email ' + '</strong>' + '</td>'+
                '<td>' + '<strong>' + 'Password ' + '</strong>' + '</td>'+
                '<td>' + '<strong>' + 'Education ' + '</strong>' + '</td>'+
                '<td>' + '<strong>' + 'Experience ' + '</strong>' + '</td>' + '</tr>';
   	 	for(var i =0 ; i< data.length;i++)
   			{
    			 var replacing = 
          '<tr>' + '<td>' + data[i]._id + '</td>' +
          '<td>' + data[i].firstName + '</td>' +
          '<td>' + data[i].lastName + '</td>' +
          '<td>' + data[i].gender + '</td>' +
          '<td>' + data[i].birthday + '</td>' +
          '<td>' + data[i].address + '</td>' +
          '<td>' + data[i].photo + '</td>' + 
          '<td>' + data[i].email + '</td>' +
          '<td>' + data[i].password + '</td>' +
          '<td>' + data[i].education + '</td>' + 
          '<td>' + data[i].experience + '</td>' + 
          '<td>' + '<button type="button" class="btn btn-danger">' + 'Editar' + '</button>' + '</td>' + '</tr>' ;
          myDiv += replacing;
   	    }
 	    $(".lista").append(myDiv)
   }
  });
  };

  function modificar(e)
  {
    e.preventDefault();
  var user = {
      _id:'',
      firstName:'',
      lastName:'',
      gender:'',
      birthday:'',
      address:'',
      photo:'',
      email:'',
      password:'',
      education:'',
      experience:'',
  };
  $.ajax({
    url:'https://connectedin.herokuapp.com/person',
    method:'GET',
    success: function(data)
  {
    user._id=data[i]._id;
    user.firstName=data[i].firstName;
    user.lastName=data[i].lastName;
    user.gender=data[i].gender;
    user.birthday=data[i].birthday;
    user.address=data[i].address;
    user.photo=data[i].photo;
    user.email=data[i].email;
    user.password=data[i].password;
    user.education=data[i].education;
    user.experience=data[i].experience;
  }
  });
  $.ajax({
    url:'https://connectedin.herokuapp.com/person',
    method:'PUT',
  });
  }















});



