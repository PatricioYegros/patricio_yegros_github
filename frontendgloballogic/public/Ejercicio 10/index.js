 /* Problema 1

 Dado un vector con numeros enteros:
  Escriba tres funciones que realicen la suma de todos los elementos del vector utilizando: X
   1) for
   2) while
   3) recursion


 Problema 2

 Dado dos vectores: X

  Escriba una funcion que retorne un vector alternando elementos de ambos vectores. Por ejemplo:
   Dado vectores [1,2,3] y [a,b,c] que retorne [1,a,2,b,3,c]
los q les pediria es q a los resultados los impriman con
 console.log.... */

 var vector1[]={1,2,3,4,5};
 var vector2[]={a,b,c,d,e};
 var vector3[20];
 var i=0,j=0,k=0;
 var suma=0;

 function sumaFor(vector1,i,suma)
 {
 	for(i=0;i<vector1.length;i++)
 	{
 		suma=suma+vector1[i];
 	}
 	return console.log("El resultado de la suma del vector con el método For es de: " + suma);
 }

 function sumaWhile(vector1,i,suma)
 {
 	i=0;
 	while(i<vector1.length)
 	{
 		suma=suma+vector1[i];
 		i++;
  	}
  	return console.log("El resultado de la suma del vector con el método While es de: " + suma);
 }

 function sumaRecursividad(vector1,i,suma)
 {
 	
 }

function vectorAlternado(vector1,vector2,vector3,i,j,k)
{
	while(i<=vector1.length && j<=vector2.length)
	{
		if(i==vector1.length)
		{
			vector3[k]=vector2[j];
			k++;
			j++;
		}
		else if(j==vector2.length)
		{
			vector3[k]=vector1[i];
			k++;
			i++;
		}
		else
		{
			vector3[k]=vector1[i];
			k++;
			vector3[k]=vector2[j];
			k++;
			i++;
			j++;
		}
	}
	return console.log("El vector resultante es: " + vector3);
}
