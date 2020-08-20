function mostrar()
{
 
    var peso;
    var temperatura;
    var contadorTemperaturasPares=0;
    var MarcaMaxPeso;
    var contadorTemperaturaNegativos=0
    var promediopesos;
    var pesoMaximo;
    var pesoMinimo;
    var respuesta=true;
    var productosCongelados=0;
    var cantidadProductos=0;
    var primeraves=true;
    var acumuladorPesos=0;

    do{

       marca=prompt("ingrese la marca del producto");
        //evaluar que la persona haya ingresado el dato
       while(marca==""){
        marca=prompt("Ingrese una marca valida")
       } 

       peso=prompt("ingrese el peso del producto entre 1 y 100");
       peso=parseInt(peso);
       while(isNaN(peso)||peso<1||peso>100){
         peso=prompt("Error,ingrese el peso del producto entre 1 y 100")
         peso=parseInt(peso);
         
       temperatura=prompt("Ingrese la temperatura entre -30 y 30");
       temperatura=parseInt(temperatura);
       while(isNaN(temperatura)||peso<-30||peso>30){
         peso=prompt("Error,ingrese la temperatura entre -30 y 30");
         peso=parseInt(peso);  
       } 
       if(temperatura%2==0){
           cantidadPares++;
       }
       if(temperatura<0){
           productocongelado++;
       }

       if (primeraves){
           primeraves=false;
           pesoMaximo=peso;
           pesoMinimo=peso;
           marcaMasPesada=marca;
       }else{
           if(peso>pesoMaximo){
               pesoMaximo=peso;
               marcaMaspesada=marca
           }else{
               if(peso<pesoMinimo){
                   pesoMinimo=peso
               }
           }
       }
        
        cantidadProductos++;
        acumuladorPesos=+peso;
        
        confirm("¿desea continuar?")
    }
    while(respuesta=true)
    if(cantidadproductos>0){
        promedio=acumladorPesos/cantidadProductos;
    }else{
            promedio=prompt("no ingreso ningun producto");
    }
    document.write("La cantidad de temmperaturas pares: "+ cantidadPares + "<br>");
    document.write("La marca del producto mas pesado: "+ marcaMasPesda + "<br>");
    document.write("La cantidad de produtos que se conservan a menos grados: "+ productosCongelados + "<br>");
    document.write("peso Maximo: "+ pesoMaximo + "<br>");
    document.write("peso Minimo: "+ pesoMinimo+"<br>");
    
}
