/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura=document.getElementById("Temperatura").value;
    temperatura=parseInt(temperatura);
    var centigrados;
    if(isNaN(temperatura)){alert("por favor ingrese un numero valido");}
    centigrados=(temperatura-32)/1.8;
    alert( temperatura+" Fahrenheit son " +centigrados+"  centígrados");
}

function CentigradosFahrenheit () 
{var temperatura=document.getElementById("Temperatura").value;
temperatura=parseInt(temperatura);
var fahrenheit;
if(isNaN(temperatura)){alert("por favor ingrese un numero valido");}
fahrenheit=(temperatura*1.8)+32;
alert( temperatura+" centigrados son " +fahrenheit+"  fahrenheit");
	
}
