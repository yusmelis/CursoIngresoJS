/*/Al presionar el botón pedir números hasta que el USUARIO QUIERA e informar la suma acumulada y el promedio.
/*/



function mostrar()
{
	//defino y asigno variables

	var numero;
	var acumulador=0;
	var respuesta= true;
	var contador=0;
	
	//valido variables
	while(respuesta==true){
		numero= prompt("ingrese un numero");
		numero=parseInt(numero);
	
		while(isNaN(numero)){
			numero=prompt("ingrese un numero valido");
			numero=parseInt(numero);
		}
	acumulador+=numero;
	contador++,
	respuesta=confirm("¿desea continuar ingresando numeros");
	}
	
document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/contador;
}
