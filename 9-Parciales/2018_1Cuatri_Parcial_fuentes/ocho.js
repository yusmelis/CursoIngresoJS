function mostrar()
{
    var respuesta=true
    var numero;
    var letra;
 
    var contadorNumerosPares;
    var contadorNumerosImpares;
    var contadorDeCeros;
while(respuesta==true){
    do{
        numero=prompt("ingrese un numero");
        numero=parseint(numero);
        if(numero%2==0&&numero!=0){
            contadorNumerosPares++;
        }else{
            if(!(numero%2==0)&&numero!=0){
            contadorNumerosImpares++;
            }else{
                contadorDeCeros;
            }
        }
    }while(isNan(numero)||numero<-100||numero<100)

    do{
        letra=prompt("ingrese una letra");
 ;
    }while(!isNaN(letra))


    //punto a
respuesta=confirm("desea continuar ingresando")
}

    

}
