/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    // Defino Variables
    var cantidadlamparas;
    var marcadelamparas;
    var preciofinal;
    var descuento;
    var importefinal;
    var importetotal;
    var descuentoenpesos;
    var ingresosbrutos;
    var pago;
    var preciototalbruto;
    //Asigno variables
    
    preciofinal= 35;
    
    cantidadlamparas= document.getElementById("Cantidad").value;
    marcadelamparas=document.getElementById("Marca").value;
    
    //Defino condiciones de descuento
    
    if(cantidadlamparas>=6){
        descuento=0.5
    }else{
        if(cantidadlamparas==5){
            if(marcadelamparas=="ArgentinaLuz"){
                descuento=0.4
            }else{
                descuento=0.3
            }
        }else{
            if(cantidadlamparas==4){
                if(marcadelamparas== "ArgentinaLuz"||marcadelamparas=="FelipeLamparas"){
                   descuento=0.25
                }else{
                    descuento=0.20
                }
            }else{
                if(cantidadlamparas==3){
                    if(marcadelamparas=="ArgentinaLuz"){
                        descuento=0.15
                    }else{
                        if(marcadelamparas=="FelipeLamparas") {
                            descuento=0.10
                        }else{
                            descuento=0.05

                        }
    
                    }
                }else{
                    if(cantidadlamparas<3){
                        descuento=0
                    }
                }
            }
        }
    }
    preciototalbruto=cantidadlamparas*preciofinal;
    descuentoenpesos= preciototalbruto*descuento;
    
    importefinal=preciototalbruto-descuentoenpesos;
    document.getElementById("precioDescuento").value=importefinal;
    if(importefinal>120){
        ingresosbrutos=importefinal*0.10;
        pago=importefinal+ingresosbrutos;
        alert("IIBB usted pago "+pago+" $, siendo "+ingresosbrutos+" $ el impuesto que se pago " );
        
    }
    
    
}
 	

