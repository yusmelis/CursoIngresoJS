function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
    {   
    case "Enero":
        alert("Que comienzes bien el año!!!");
        break;
    case "Marzo":
        alert("A clases!!!");
        break;
    case "Julio":
        alert("Se vienen las vacaciones!!!");
        break;
    case "Diciembre":
        alert("Se vienen las fiestas!!!");
        break;
    default:
        alert("No hay evento reconocido en este mes");
        break;// el break lo que hace es enviarte directamente a la llave de cierre del switch y que no siga evaluando los casos
    } 


}//FIN DE LA FUNCIÓN