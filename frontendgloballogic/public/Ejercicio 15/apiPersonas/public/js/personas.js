$(function(){
	$.get({
			url:'/personas',
			data:{
				id:'',
				nombre:'',
				edad:'',
				email:''
			},
			success: function(data){

			for(var i=0; i<data.length; i++)
			{	$('.row.personas').append('<span class = "col-md-3"> Id:' + data[i].id + 
				'</span> <span class = "col-md-3"> Nombre:' + data[i].nombre + 
				'</span> <span class = "col-md-3"> Edad:' + data[i].edad +
				'</span> <span class = "col-md-3"> Email:' + data[i].email + '</span><div>'
				);
			}
		}
	});	
	

	$('.agregar').on('click',function(e)
	{	e.preventDefault();
		$.post({
			url:'/personas',
			data:{
				id:$('input.id').val(),
				nombre:$('input.nombre').val(),
				edad:$('input.edad').val(),
				email:$('input.email').val()
			},
			success: function(data){
					console.log(data);
				$('.row.agregados').append('<span class = "col-md-3"> Id:' + data.id + 
				'</span> <span class = "col-md-3"> Nombre:' + data.nombre + 
				'</span> <span class = "col-md-3"> Edad:' + data.edad +
				'</span> <span class = "col-md-3"> Email:' + data.email + '</span><div>');
			}
		});
	});

	$('.buscarPorID').off('click').on('click',function(e)
	{ e.preventDefault();
		$('.row').empty();
		var valor = $('input.idBuscar').val();

		$.get({
				url:'/personas',
				data:{
					id:'',
					nombre:'',
					edad:'',
					email:''
				},
				success:function(data)
				{
				for(var i=0;i<data.length;i++)
				{
					if(data[i].id==valor)
					{
						$('.row.buscar').append('<span class = "col-md-3"> Id:' + data[i].id +
						'</span> <span class = "col-md-3"> Nombre:' + data[i].nombre +
						'</span> <span class = "col-md-3"> Edad:' + data[i].edad +
						'</span> <span class = "col-md-3"> Email: ' + data[i].email + '</span><div>');
					}
				}
			}
		});
	});
	$('.refresh').on('click',function(e)
	{ e.preventDefault();
		$('.row').empty();
	  $.get({
			url:'/personas',
			data:{
				id:'',
				nombre:'',
				edad:'',
				email:''
			},
			success: function(data){

			for(var i=0; i<data.length; i++)
			{	$('.row.personas').append('<span class = "col-md-3"> Id:' + data[i].id + 
				'</span> <span class = "col-md-3"> Nombre:' + data[i].nombre + 
				'</span> <span class = "col-md-3"> Edad:' + data[i].edad +
				'</span> <span class = "col-md-3"> Email:' + data[i].email + '</span><div>'
				);
			}
		}
	});	
	});
	$('.eliminarPorID').on('click',function(e)
	{
		e.preventDefault();
		$('.row').empty();
		var valor = $('input.idEliminar').val();
		$.ajax({
				url:'/personas',
				method:'delete',
				data:{
					id:$('input.idEliminar').val();
				},
				success: function(data){
					console.log('respuesta del server', data);
				}
		})
	});
});
