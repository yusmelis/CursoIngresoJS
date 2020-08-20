/*/al presionar el botón pedir números hasta que el usuario quiera, 
mostrar el número máximo y el número mínimo ingresado.
/*/

function mostrar()
{
	//defino y asigno varibles 
	var numero;
	var maximo;
	var minimo;
	var flag=true;
	var respuesta=true;

	// valido variables
	while(respuesta==true){
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		
		while(isNaN(numero)){
			numero=prompt("Error!, ingrese un numero valido ");
			numero=parseInt(numero);
		}
	//operacion
		if(flag==true||numero>=maximo){
			maximo=numero;
		}
		if(flag==true||numero<=minimo){
			minimo=numero;
		}
		flag=false;
		respuesta=confirm("desea ingresar otro numero");
	}
	document.getElementById("maximo").value=maximo;
	document.getElementById("minimo").value=minimo;
}























	// declarar variables
	
	/*var respuesta='si';
	var numero;
	while(respuesta=="si")// o mientras respuesta==si va dar verdadero la primera ves qye entro   
	//porque ya declare respuesta =si, por eso quito el !=no
 esto es una forma de hacelos
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		respuesta=prompt("desea ingresar otro numero");
		respuesta=toLowerCase();


		respuesta=prompt("desea ingresar otro numero")
esto funciona hasta que el usuario se equivoca si coloca un SI masyucula por ejemplo 
	 tolo es para abajo por misnusculas*/ 

/*/	 function mostrar()

 {
	 
		//var contador=0;	
		var flag=true 
		var respuesta=true;
		var numero;
		var max;
		var min;
	while(respuesta==true){

		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		
	//	
		if(flag==true||numero>max){
			max=numero;
			}else{
				if(flag==true || numero<min){
				min=numero;
				}
			}
		flag=false;
	respuesta=confirm("desea ingresar otro numero");
	}
		document.getElementById("maximo")=max
		document.getElementById("minimo")=min


}
/*/
	//FIN DE LA FUNCIÓN
	/*//para declarar max y min cuando calculamos maximos y minimos 
	 no deberia de inicializarlos porque hay variables como temperaturas que a veces qson distintos 
	 una forma es de trabajar con bandera y otra como contador

	 if (contado = 0)

	 si el ejercicio calcula promedio lo hago con contador sino es mejor bandera, sino necesito contar es
	 mejor el uso de banderas si solo me pide max y min 

	 la bandera funciona como esta baja y si la cargo es decir pasa a verdadero me informa que paso alfo

	 //validar  que si yo quiero ingresar numeros del 1 al 10 antes tengo que ver que esten dentro de un rango numerico
	 el if evalua si el dato esta mal  no itera entonces no utilizo la estructura ; utilizo la estrucutura while
	 while(numero<1||numero>10)
	 {numero= prompt"reingrese}


	 si el usuarioo ingresa una letras 
	 while(isNaN(numero)||numero<1||numero>10)
	 ahora lo parseo y culmino la validacion
	 /*/

