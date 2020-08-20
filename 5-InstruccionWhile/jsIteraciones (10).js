/*/Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
 2-Suma de los positivos.
  3-Cantidad de positivos.
   4-Cantidad de negativos. 
   5-Cantidad de ceros.
	6-Cantidad de números pares.
	 7-Promedio de positivos.
	  8-Promedios de negativos. 
	  9-Diferencia entre positivos y negativos, (positvos-negativos).
Curso de ingreso UTN FRA/*/

function mostrar()
{

	var numero;
	var contador=0;
	//declarar contadores y variables
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadceros=0;
	var cantidadNumerosPares=0;
	var promedioNegativos;
	var promediosPositivos;
	var diferenciaPositivosNegativos;
	var respuesta=true;

	//valido
	while(respuesta==true)
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		while(isNaN(numero)){
			numero=prompt("Error!,ingrese un numero valido");
			numero=parseInt(numero);
		}
	//opero
		if(numero<0){
			sumaNegativos+=numero;
			cantidadNegativos++;
		}else{
				if(numero>0){
				sumaPositivos+=numero;
				cantidadPositivos++;
				}else{
				cantidadceros++;
				}

			}
		if(numero%2==0){
			cantidadNumerosPares++;
		}
		respuesta=confirm("desea continuar ingrando numeros");
	}
	if(promedioNegativos!=0){promedioNegativos=sumaNegativos/cantidadNegativos; 
	}else{promedioNegativos="No introdujo numeros negativos"}
	if(cantidadPositivos!= 0){promediosPositivos=sumaPositivos/cantidadPositivos; 
	}else{promediosPositivos="No introdujo numeros positivos"}

	diferenciaPositivosNegativos=sumaPositivos+sumaNegativos;
	
	document.write("1-La suma de los negativos = "+sumaNegativos+"<br/>");
	document.write("2-La suma de los positivos = "+sumaPositivos+"<br>");
	document.write("3-La Cantidad de positivos = "+cantidadPositivos+"<br>");
	document.write("4-Cantidad de negativos = "+cantidadNegativos+"<br>");
	document.write("5-Cantidad de ceros= "+cantidadceros+"<br>");
	document.write("6-Cantidad de números pares= "+cantidadNumerosPares+"<br>");
	document.write("7-Promedio de positivos= "+ promediosPositivos+"<br>");
	document.write("8-Promedios de negativos = "+promedioNegativos+"<br>");
	document.write("9-Diferencia entre positivos y negativos = "+diferenciaPositivosNegativos);

}
	//FIN DE LA FUNCIÓN