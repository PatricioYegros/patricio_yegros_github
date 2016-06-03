var calculadora=(function(){
	var valor;
    
    init();

	function sumar(input){
		input = tryParse(input); //Tryparse = setea variable a un tipo determinado
		valor += input;
		return valor;
	}
	function tryParse(input){
		input = parseInt(input,10);
		if(isNaN(input))
		{
			throw 'Invalid Number'; //Tira un mensaje
		}
		return input;
	}
	function restar(input){
		input = tryParse(input);
		valor -= input;
		return valor;
	}
	function dividir(input){
		input = tryParse(input);
		if (input === 0)
		{
			throw 'COMO VAS A DIVIDIR POR 0, IGNORANTE'
		}
		valor = valor / input;
		return valor;
	}
	function multiplicar(input){
		input=tryParse(input);
		valor *= input;
		return valor;
	}
	function clear(input){
		init();
		return valor;
	}
	function init(){
		valor = 0;
	}
	function asignarValor(input){
		input = tryParse(input);
		valor=input;
		return valor;
	}
	function obtenerValor(){
		return valor;
	}

	

	return {
		sumar: sumar,
		restar: restar,
		dividir: dividir,
		multiplicar: multiplicar,
		clear: clear,
		asignarValor: asignarValor,
		obtenerValor: obtenerValor
	}
})();

$(function()
{
	var $calc,
		inputNumero,
		operacion,
		concatenarNumero;

	init();

	function init(){
		$calc=$('.calculadora'),
		inputNumero= $calc.find('input');
		//Set valor inicial
	//	clear();
		inputNumero.val(0);
		//Set listeners
		$calc.find('.butonNumero').on('click', onNumberPress);
		$calc.find('.operacion').on('click', onOperationPress);
	}

	function onNumberPress(){
		var numero = $(this).html();
		if(concatenarNumero){
			numero = parseInt(inputNumero.val() + numero, 10);
		}
		concatenarNumero = true;
		inputNumero.val(numero);

		if(!operacion){
			calculadora.asignarValor(numero);
		}
	}

	function onOperationPress(){
		var nuevaOperacion = $(this).data('operacion');
		concatenarNumero = false;

		if(nuevaOperacion === 'clear'){
			return clear();
		}
		if(nuevaOperacion === 'igual' && operacion){
			var resultado = calculadora[operacion](inputNumero.val());
			inputNumero.val(resultado);
		}
		operacion = nuevaOperacion;
	}
	function clear(){
		inputNumero.val(calculadora.clear());
		concatenarNumero = true;
		operacion = null;
	}
});

