/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	//declaracion de variables
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
alert("la suma es " + resultado);
	
}

function restar()
{
    //declaracion de variables
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
resultado= numerounoparseado-numerodosparseado;

//Mostrar resultado
alert("La resta es " + resultado);
	
}

function multiplicar()
{ //declaracion de variables
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
resultado= numerounoparseado*numerodosparseado;

//Mostrar resultado
alert("La multiplicacion es igual a  " + resultado);
	
}

function dividir()
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
resultado= numerounoparseado/numerodosparseado;

//Mostrar resultado
alert("la division es igual a " + resultado);
	
}

