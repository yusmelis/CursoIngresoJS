/*/ Al presionar el botón mostrar 10 repeticiones con números ASCENDENTE, desde el 1 al 10./*/

function mostrar()
{
	var contador=0;

	while(contador<10){
		contador++;
		console.log(contador)
	}
}




/*/function mostrar()
{var contador=0;
	while(contador<10){
		contador++;//para mostrarlo mas profesional contador++ me suma 1 y contador +=2 suma dos
		 // si lo pongo aqui cuento antes de mostrar, siempre voy a tratar de iniciar el contador en cero 
		console.log(contador)//tambien podria sumarle uno aqui si quiero contar despues de mostar
		alert(contador);
	}
	
/*/

//FIN DE LA FUNCIÓN

// como es mostrar el usuario no interviene pidiendole un numero yo debo mostarle numeros al presionar el boton

// todos los contadores deberian de iniciarlizarce en cero porque sino incian desde undefined y dan un NaN 
//no es un numero




//se repite lo que deseo mostrar? si se repite va dentro del while sino va fuera
// el while evalua una condicion que debe ser verdadera y debe ser distinta de cero porque si es cero va dar 
//falso
//while{

// debo tener una sentencia que me modifique la condicion y haga falsa la condicion sino
//nace un bucle infinito por lo que un momento lo hago falso para que pueda salir del bloque
//}

// los acumuladores tienen valores fijos y variables
// los contadores sumas por los general valores constantes
// yo incremento el contador en uno y cuando llego a 10 rompo el bloque 