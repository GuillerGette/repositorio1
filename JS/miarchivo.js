var contador;
 for(contador=1; contador <= 5; contador++ )
{
    if( contador == 3)
         continue;
    alert( "Hay que aceptar esto para acceder a un descuento increible [" + contador + "]" );
}


function nombredelcliente(){

    let nombre = prompt("ingrese nombre del cliente")
      return nombre;
  }
  
  let descuento = prompt ("de cuanto es el descuento total")
  
    let cliente = nombredecliente()
  
    function descuento(){
  
     let descuento1 =  Number.parseInt(prompt ("ingrese descuento 5%"))
     let descuento2 =  Number.parseInt(prompt ("ingrese descuento 10%"))
     let descuento3 =  Number.parseInt(prompt ("ingrese descuento 15%"))
     
     let descuentof =  (descuento1 + descuento2 + descuento3) /3
     return descuentof
    }
   
   let descuentofinal = notas()
  
  
  
   if (descuentofinal >= "30%") {
      alert ("felicidades " cliente " accediste a un descuento " descuento " con " descuentofinal)