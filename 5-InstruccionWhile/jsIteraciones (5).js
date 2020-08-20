/*/Al presionar el botón pedir un sexo 'f' para femenino, 'm' para masculino/*/
function mostrar()
{
var sexo;
sexo=prompt("Ingrese f o m");
sexo=sexo.toLowerCase();
while(sexo!="f"&&sexo!="m"){
    sexo=prompt("Error, ingrese f o m ");
}
document.getElementById("Sexo").value=sexo

    
}