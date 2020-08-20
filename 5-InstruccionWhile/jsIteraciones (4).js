/*/al presionar el botón pedir un número entre 0 y 9 inclusive./*/

function mostrar()
{
	//Defino Variable
	var numero;

	//Asigno Variable
	numero=prompt("Por favor ingrese un numero entre 0 y 9 inclusive");
	
	//Valido Variable
	while(numero<0||numero>9||isNaN(numero)){
		numero=prompt("Error, ingrese un numero valido entre 0 y 9 inclusive");
	}
	numero=parseInt(numero);

document.getElementById("Numero").value=numero;



}


/*/function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	{
	numero=prompt("Error!!! por favor ingrese un numero entre 0 y 10");
}
document.getElementById("Numero").value=numero;/*/
