function mostrar()
{
    //defino variables
var notas;
var contador=0
var sexo;

while(contador<5){
 contador++;
do{
    notas=prompt("ingrese su nota entre 0 y 10");
    notas=parseint(notas)
} while(isNaN(notas)||notas<0||notas>10)
  
do{ 
    sexo=prompt("ingre m si es masculino y f si es femenino")
}while(sexo!="f"&&sexo!="m")

}



}
