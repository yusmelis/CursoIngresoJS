
//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.

function mostrar()
{
	//Defino y asigno variables
	var numero;
	var contador=0;
	var acumulador=0;

	//valido
	while(contador<5){
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		while(isNaN(numero)){
			numero=prompt("Error!, ingrese un numero valido");
			numero=parseInt(numero)
		}
		acumulador+=numero;
		contador++

	}
document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/contador;





}




/*/function mostrar()
{

	var numeroPedidos=0;
	var totalSuma=0;
    var numero;

	while(numeroPedidos<5){
		
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero)// tengo un numero lo convierto a  entero 
		//lo pruebo se que puedo ingresar los numero continuo
		while(isNaN(numero)){
			numero=prompt("Error!,ingrese un numero valido");
			numero=parseInt(numero);
		totalSuma=totalSuma+numero; //tambien puedo colocar totalsuma+=numero
			
		}
	
		numeroPedidos=numeroPedidos+1;
	
	}

	
	document.getElementById('suma').value=totalSuma;
	document.getElementById('promedio').value=totalSuma/contador; // aca cambio el 5 por el contador porque si 
	//el usuario tiene la posibilidad de ingresar mas nmeros me cambia todo

}//FIN DE LA FUNCIÓN


var contador=0
// como no tengo un espacio para ingresar el numero no lo muestro por id entonces lo  traigo po id,
// cuando no tengo un cuandro tonde mostrarle al usuario por id se lo muestro por alert si lo tengo por id

/*/