/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno=document.getElementById("PrecioUno").value;
    var precioDos= document.getElementById("PrecioDos").value;
    var precioTres=document.getElementById("PrecioTres").value;
    precioUno=parseInt(precioUno);
    precioDos=parseInt(precioDos);
    precioTres=parseInt(precioTres);
    if(isNaN(precioUno)||isNaN(precioDos)||isNaN(precioTres)){
        alert("Error!,Por favor ingrese numeros validos");
    }
     var suma=precioUno+precioDos+precioTres;
    alert("La suma de los tres precios es igual a "+ suma);
}
function Promedio () 
{
    var precioUno=document.getElementById("PrecioUno").value;
var precioDos= document.getElementById("PrecioDos").value;
var precioTres=document.getElementById("PrecioTres").value;
var promedio;
var suma;
precioUno=parseInt(precioUno);
precioDos=parseInt(precioDos);
precioTres=parseInt(precioTres);
if(isNaN(precioUno)||isNaN(precioDos)||isNaN(precioTres)){
        alert("Error!,Por favor ingrese numeros validos");
    }
suma=precioUno+precioDos+precioTres;
promedio=suma/3;
alert("El promedio es igual a  "+promedio);
}
function PrecioFinal () 
{
var precioUno=document.getElementById("PrecioUno").value;
var precioDos= document.getElementById("PrecioDos").value;
var precioTres=document.getElementById("PrecioTres").value;
var suma;
var iva;
var total;
precioUno=parseInt(precioUno);
precioDos=parseInt(precioDos);
precioTres=parseInt(precioTres);
if(isNaN(precioUno)||isNaN(precioDos)||isNaN(precioTres)){
        alert("Error!,Por favor ingrese numeros validos");}
 suma=precioUno+precioDos+precioTres;
 iva=suma*0.21
total=suma+iva;
alert("el precio final es " +total+ " con IVA incluido");
}