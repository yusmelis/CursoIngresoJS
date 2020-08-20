/*/En el ingreso a un viaje en crucero nos 
solicitan nombre , 
edad(mayores de 18),
 sexo("f" o "m") y
  estado civil("soltero", "casado" o "viudo");
a) El nombre del hombre casado más joven.
b) El sexo y nombre del pasajero/a más viejo.
c) La cantidad de mujeres que hay casadas o viudas.
d) El promedio de edad entre las mujeres.
e) El promedio de edad entre los hombres solteros.
Curso de ingreso UTN FRA/*/
function mostrar()
{
	var nombre; 
	var edad;
	var sexo;
    var estadoCivil;
	var respuesta=true;


nombre= prompt("ingrese el nombre");


		do{
		edad= prompt("ingrese el edad: debe ser mayor a 18 años");
		edad=	parseInt(edad);
		}
		while(isNaN(edad)||edad>18)
			

		do{
			sexo= prompt("ingrese el sexo: f o m");
			
			}
			while(!isNaN(sexo)||sexo!="f"&&sexo!="m")


do{
	estadoCivil= prompt("ingrese el estado Civil: soltero, casado o viudo");
	
	}
	while(!isNaN(estadoCivil)||estadoCivil!="soltero"&&estadoCivil!="casado"&&estadoCivil!="viudo")
	
			






	confirm("desea continuar?");
}while(respuesta==true)

	alert("tres");
}
