function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;


switch(mesDelAño)
    {   
    case "Julio":
        alert("Abrigate que hace frio");
        break;
    case "Agosto":
        alert("Abrigate que hace frio");
        break;
    case "Abril":
        alert("Falta para el invierno");
        break;
    case "Mayo":
        alert("Falta para el invierno");
        break;
    case "Junio":
        alert("Falta para el invierno");
        break;
    default:
        alert("Ya pasamos el frio ahora viene el calor");
        break;    
    }
}//FIN DE LA FUNCIÓN