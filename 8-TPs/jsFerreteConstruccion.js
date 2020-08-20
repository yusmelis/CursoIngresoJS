/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/


function Rectangulo () 
{
    //Defino y asigno variables
    var largoTerreno=document.getElementById("Largo").value;
    largoTerreno=parseInt(largoTerreno);
    var anchoTerreno=document.getElementById("Ancho").value;
    anchoTerreno=parseInt(anchoTerreno);
    var perimetro=2*(largoTerreno+anchoTerreno);
    var cantidadAlambreRectangulo=3*perimetro;
    alert("La cantidad de alambre a comprar es de "+cantidadAlambreRectangulo+" metros");

}function Circulo () 
{
    var radioTerreno=document.getElementById("Radio").value;
    radioTerreno=parseInt(radioTerreno);
    var circunferenciaTerreno=3.14159*2*radioTerreno;
    var cantidadAlambreCirculo=3*circunferenciaTerreno;
    cantidadAlambreCirculo=parseInt(cantidadAlambreCirculo)+1
    alert("la cantidad de alambre a comprar de terreno con tres hilos es de "+ cantidadAlambreCirculo+" metros");
}   
function Materiales () 
{
    var largoTerreno=document.getElementById("Largo").value;
    largoTerreno=parseInt(largoTerreno);
    var anchoTerreno=document.getElementById("Ancho").value;
    anchoTerreno=parseInt(anchoTerreno);
    var areaterreno=largoTerreno*anchoTerreno;
    var bolsasCemento=2*areaterreno;
    var bolsasCal=3*areaterreno;
    alert("Se necesitan "+ bolsasCemento+" bolsas de cemento y " +bolsasCal+ " bolsas de cal");
}
