/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{//declaracion de variables
    var numerounoingresado;
    var numerodosingresado;
    var numerounoparseado;
    var numerodosparseado;
    var resultado;

//Obtencion de valores por id
numerounoingresado= document.getElementById("numeroUno").value;
numerodosingresado= document.getElementById("numeroDos").value;

//parseo de numeros ingesados
numerounoparseado= parseInt(numerounoingresado);
numerodosparseado= parseInt(numerodosingresado);

// operacion
resultado= numerounoparseado+numerodosparseado;

//Mostrar resultado
alert("el resultado es " + resultado);

}

