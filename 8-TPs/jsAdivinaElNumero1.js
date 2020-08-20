/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto
  o si “se pasó…”  del número secreto.
*/

var numeroSecreto; 
var contadorIntentos=0;
var numeroIngresado;
var respuesta=true;
function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
   numeroSecreto=Math.floor(Math.random()*(101-1))+1;
    //alert(numeroSecreto );
    alert("el numero secreto es  " + numeroSecreto);
          

}

function verificar()
{
  numeroIngresado=document.getElementById("numero").value;
  contadorIntentos++;

  if(isNaN(numeroIngresado)){alert("Error!!!, ingrese un numero");}
   else{if(numeroIngresado==numeroSecreto){
         alert("usted es un ganador!!! y en solo "+ contadorIntentos +"  intento");
        }	else{  
                if(numeroIngresado>numeroSecreto){
                alert("Se paso del numero secreto");
              }else{
                      alert("falta para adivinar el numero secreto  ")
                  }
            }
          }     
document.getElementById("intentos").value=contadorIntentos;
}