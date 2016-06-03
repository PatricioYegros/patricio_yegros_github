var resultado = 0;

function testSuma(){
	calculadora.clear();
	resultado = calculadora.sumar(1);
	if (resultado === 1){
		alert('sumar funciona');
	}
}

function testDividir0(){
	calculadora.clear();
	resultado=calculadora.sumar(1);
	resultado=calculadora.dividir(0);
}

function convertirLetras(){
	calculadora.clear();
	resultado=calculadora.sumar('saj;ldfajf');
}

function convertirNumeros(){
	calculadora.clear();
	resultado=calculadora.sumar('20');
	if(resultado===20){
		alert('conversion funciona');
	}
}

function correrTests(){
	testSuma();
	testDividir0();
	convertirLetras();
	convertirNumeros();
}