/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var numeroUno;
var numeroDos;
var operador;
var resultado;
function comenzar()
{  
    numeroUno=Math.floor(Math.random()*+10)+1;
    numeroDos=Math.floor(Math.random()*+10)+1;
    operador=Math.floor(Math.random()*+4)+1;
    document.getElementById("PrimerNumero").value=numeroUno;
    document.getElementById("SegundoNumero").value=numeroDos;
    switch(operador){
        case 1:
         operador="+";
         break;
        case 2:
            operador="-"
            break;
        case 3:
            operador="*"
            break;
        case 4:
            operador="/"
            break;
        default:
            break;

     }
     document.getElementById("Operador").value=operador;
     
    
}//FIN DE LA FUNCIÓN
function Responder()
{  //Asigno variables
    respuesta=document.getElementById("Respuesta").value;
    respuesta=parseInt(respuesta);
    
    switch(resultado){
        case 1:
         resultado=numeroUno+numeroDos;
         break;
        case 2:
        resultado=numeroUno-numeroDos;
            break;
        case 3:
        resultado=numeroUno*numeroDos;
            break;
        case 4:
        resultado=numeroUno/numeroDos;
        break;
        default:
            break;
        }
        if(resultado==respuesta){
         alert("el resultado es correcto");
        }
            else{
                alert("el resultado es incorrecto");               
        }



 


}//FIN DE LA FUNCIÓN