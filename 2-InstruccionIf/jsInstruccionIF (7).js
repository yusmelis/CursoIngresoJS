function mostrar()
{ 

	//asigno la variable
    var edad;
    var estadocivil;   
    //asigno variable
         edad= document.getElementById("edad").value;
         estadocivil= document.getElementById("estadoCivil").value;
        
    //armo la estructura del if
         if  (edad<18&&estadocivil!="Soltero"){
             alert( "Es muy pequeño para no ser soltero");
         }
        

}//FIN DE LA FUNCIÓN