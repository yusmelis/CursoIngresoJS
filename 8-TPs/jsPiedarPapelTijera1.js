/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var eleccionJugador;

function comenzar()
{
    var eleccionMaquina;
    var piedra;
    var papel;
    var tijera;
    eleccionMaquina=Math.floor(Math.random()*3)+1;
    switch(eleccionMaquina){
        case 1:
            eleccionMaquina=piedra;
             break;
        case 2:
            eleccionMaquina=papel;
            break;
        case 3:
            eleccionMaquina=tijera;
            break; 
    }
     

}//FIN DE LA FUNCIÓN
function piedra()
{
    if(piedra==eleccionMaquina){
    alert("Empato");
    }else{
        if(eleccionMaquina==2){
        alert("Gano");
         }else{
             alert("perdio");
              }

        
        }

}//FIN DE LA FUNCIÓN
function papel()
{  if(papel==eleccionMaquina){
    alert("Empato");
    }else{
        if(eleccionMaquina==3){
        alert("Gano");
         }else{
             alert("perdio");
              }

        }


}//FIN DE LA FUNCIÓN
function tijera()
{
    if(tijera==eleccionMaquina){
        alert("Empato");
        }else{
            if(eleccionMaquina==1){
            alert("Gano");
             }else{
                 alert("perdio");
                  }
    
            }

}//FIN DE LA FUNCIÓN