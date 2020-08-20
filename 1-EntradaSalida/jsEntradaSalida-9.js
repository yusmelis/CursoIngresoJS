/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{// Definicion de variables
    var sueldo;
    var sueldoparseado;
    var resultado;
 // Asignacion de variables
  sueldo=document.getElementById("sueldo").value;
 //parseo de variable
  sueldoparseado= parseInt(sueldo);
 // operacion (110*sueldo)/100= 1.10*sueldo
    resultado= (sueldoparseado*110)/100;
  //mostrar resultado
  document.getElementById("resultado").value="su sueldo con aumento del 10% es de " +resultado;
}
