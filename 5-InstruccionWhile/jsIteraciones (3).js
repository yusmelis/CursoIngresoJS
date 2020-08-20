/*/al presionar el botón pedir la CLAVE (ayuda: es utn750)/*/

function mostrar()
{
   
    var clave;
    var contador=0
    clave= prompt(" Ingrese clave");
    while(clave.toLowerCase()!=("utn750")&&contador<2){
        contador++;
        clave=prompt("Error!, ingrese su clave nuevamente");
        
        }
        if(contador>=2){
        clave=alert("usted realizo tres intentos,su clave ha sido bloqueada");
    }    else {clave=alert("bienvenido");
    }




}







/*/
function mostrar()
{

var clave = prompt("ingrese el número clave.");
while(clave.toLowerCase()!=("utn750")){
    clave=prompt("Error!!!, Por favor ingrese su clave nuevamente");
}

}//FIN DE LA FUNCIÓN
/*/
