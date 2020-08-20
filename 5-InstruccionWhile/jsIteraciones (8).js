/*/Al presionar el botón pedir números hasta que el usuario quiera, 
sumar los que son positivos y multiplicar los negativos./*/

function mostrar()
{

	var positivo=0;
	var negativo=1;
	var respuesta=true;
	var numero;
	var contador=0;

	while(respuesta==true){
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		while(isNaN(numero)){
			numero=prompt("Error!, ingrese un numero valido");
			numero=parseInt(numero);

		}
		if(numero>=0){
			positivo+=numero;
		}else{
			negativo*=numero;
			contador++;
		}
	respuesta=confirm("desea ingresar otro numero");
	if(contador==0){
		negativo=0;
	}
	
	}
	

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
