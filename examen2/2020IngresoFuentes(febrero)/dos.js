/*/Realizar el algoritmo que permita ingresar los datos de una compra de ingredientes para preparar
 comida al por mayor , hasta que el cliente quiera:
peso (entre 10 y 1000)en kilo,
precio por kilo (más de cero ),
tipo validad("v";"a";"m")(vegetal,animal o mezcla )
Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo de alimento más caro.
f) El promedio de precio por kilo en total.
Curso de ingreso UTN FRA/*/
function mostrar()
{
var tipo;
var precio;
var peso;
var respuesta=true;

do{ 
do{
  peso= prompt("ingrese el peso: debe ser un valor entre 10 y 1000");
  peso=parseInt(peso);    
  }
  while(isNaN(peso)||peso<10||peso>1000)
  


do{
  precio= prompt("ingrese el precio: debe ser un valor mayor a 0");
  precio=parseint(precio);
  }
  while(isNaN(precio)||precio>0)
    


do{
tipo= prompt("ingrese el tipo validad v; a ; m (v si es vegetal a si es animal y m si es mezcla").toLowerCase();
acumuladorkilos=acumuladorkilos+peso;
}
while(!isNaN(tipo)||tipo=="v"&&tipo=="a"&&tipo=="m")
confirm(desea continuar?"")
if()





  alert("dos");
}
