
/*/Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante
b) Del ítem con más unidades, el fabricante
c) Cuántas unidades de jabones hay en total/*/
function mostrar()
{
var tipo;
var precio;
var cantidadUnidades;
var marca;
var fabricante;
var contadorProducto=0;
var banderabarbijo=0;
var preciomascaroBarbijo=0;
var preciomascaroBarbijocantidad=0;
var preciomascaroBarbijofabricante=0;
var itemconMasUnidades
var contadorJabones=0
var acumuladorjabones=0;
while(contadorProducto<5){


		do{
			tipo= prompt("ingrese el tipo: barbijo, jabon o alcohol");

		}
		while(!isNaN(tipo)||tipo!="barbijo"&&tipo!="jabon"&&tipo!="alcohol")



		do{
			precio= prompt("ingrese el precio: debe ser un valor entre 100 y 300");
			precio=	parseInt(precio);
		}
		while(isNaN(precio)||precio<100||precio>300)
	

		do{
			cantidadUnidades= prompt("ingrese la cantidad de Unidades: debe ser un valor entre 1 y 1000");
			cantidadUnidades=parseInt(cantidadUnidades);			
			}
		while(isNaN(cantidadUnidades)||cantidadUnidades<0||cantidadUnidades>1000)


	marca= prompt("ingrese la marca ");
	fabricante= prompt("ingrese el fabricante ");

	contadorProducto++;
	
	if(tipo=="barbijo"&&banderabarbijo==0||preciomascaroBarbijo<precio){
		preciomascaroBarbijo=precio;
		preciomascaroBarbijocantidad=cantidadUnidades;
		preciomascaroBarbijofabricante=fabricante;
		banderabarbijo++;
	
		document.write("Del más caro de los Barbijos, la cantidad de unidades es "+cantidadUnidades+ "y el fabricante "+fabricante+"<br>");
	  }
	
	if(contadorProducto=1||cantidadUnidades>itemconMasUnidades){
		itemconMasUnidades=cantidadUnidades;
		itemconMasUnidades=fabricante;
		document.write("Del ítem con más unidades, el fabricante es " +fabricante + "<br>");
	  }
	
	  if(tipo=="jabon"){
		acumuladorjabones+=cantidadUnidades;
		}	
	
	document.write("la cantidad total de jabones es "+acumuladorjabones);
	
	
	
	
	}	

}



