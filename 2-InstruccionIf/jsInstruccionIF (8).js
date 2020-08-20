function mostrar()
{
//tomo la edad  
// Defino variables
//asigno la variable
var edad;
var estadocivil;   
//asigno variable
     edad= document.getElementById("edad").value;
     estadocivil= document.getElementById("estadoCivil").value;
    
//armo la estructura del if
 if(edad>17&&estadocivil=="Soltero"){
  alert( "Es soltero y no es menor")
 }   

}