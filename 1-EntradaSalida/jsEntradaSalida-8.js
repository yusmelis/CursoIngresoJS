/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
 //declaracion de variables
var dividendo;
var divisor;
var dividendoparseado;
var divisorparseado
var resultado;
//asigno valores a las variables
dividendo= document.getElementById("numeroDividendo").value;
divisor= document.getElementById("numeroDivisor").value;
//parseo las variables
dividendoparseado= parseInt(dividendo);
divisorparseado= parseInt(divisor);
//realizo la operación
resultado= dividendoparseado%divisorparseado;
//muestro el resultado
alert("El resto es "+resultado);
}