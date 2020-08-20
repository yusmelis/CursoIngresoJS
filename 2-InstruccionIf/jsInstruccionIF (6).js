function mostrar()
{
//tomo la edad   
        //asigno la variable
        var edad;
        
        //asigno variable
             edad= document.getElementById("edad").value;
        
        //armo la estructura del if
             if  (edad>17){
                 alert( "Es mayor");
             }else{
                 if(edad>13){
                     alert("Es un adolescente");
                 }else{
                     alert("Es un niño");
                 }

             }
 }