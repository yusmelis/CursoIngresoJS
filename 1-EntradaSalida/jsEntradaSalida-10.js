/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{//defino variable
    var importe;
    var importeparseado;
    var resultado;
    var descuento;
 //asigno el valor a las variables
 importe= document.getElementById("importe").value;
 importeparseado= parseInt(importe);
 descuento=25/100;
 //realizo la operacion
 resultado=importeparseado-(importeparseado*descuento);
 //muestro el resultado
 document.getElementById("resultado").value="el importe con descuento del 25% es igual a "+resultado;
}
