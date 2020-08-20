function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numerorandom;
	var min;
	var max;
	min=1;
	max=10;
	numerorandom=Math.floor(Math.random()*(max-min)+min);
	if(numerorandom==9||numerorandom==10){
		alert("Su nota es de " + numerorandom+ " EXCELENTE")
	}else{
		if(numerorandom>=4){
			alert("Su nota es de " + numerorandom+ " APROBO")
		}else{
			alert("Su nota es de " + numerorandom+ " La proxima de puede")
		}
	}
	
}//FIN DE LA FUNCIÓN