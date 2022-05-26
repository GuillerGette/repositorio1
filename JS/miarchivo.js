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
  
  
  {
   if (descuentofinal >= "30%")
      alert ("felicidades " cliente " accediste a un descuento " descuento " con " descuentofinal)
    }

    let seleccion = prompt('Seleccione un articulo para comprar \n \n - Celular \n - Tablet \n - Smart Watch \n')


    switch (seleccion.toLowerCase()) {
        case 'bebidas': {
            class Bebida {
                constructor(articulo, precio) {
    
                    this.articulo = articulo;
                    this.precio = precio;
    
                }
    
                total() {
                    document.write('El Valor total del ' + this.articulo + ' es de ' + (this.precio * 1.19));
                }
            }
    
            const articulo = new Producto('Herbal', 500)
    
            articulo.total();
    
            console.log(articulo);
        }
    
        break;
    
    case 'Con teina':
    
    {
    
        class Producto {
            constructor(articulo, precio) {
    
                this.articulo = articulo;
                this.precio = precio;
    
            }
    
            total() {
                document.write('El Valor total del ' + this.articulo + ' es de ' + (this.precio * 1.19));
            }
        }
    
        const articulo = new Producto('Tablet', 250)
    
        articulo.total();
    
        console.log(articulo);
    }
    break;
    
    case 'accesorios':
    
    {
        class Producto {
            constructor(articulo, precio) {
    
                this.articulo = articulo;
                this.precio = precio;
    
            }
    
            total() {
                document.write('El Valor total del ' + this.articulo + ' es de ' + (this.precio * 1.19));
            }
        }
    
        const articulo = new Producto('Smart watch', 150)
    
        articulo.total();
    
        console.log(articulo);
    }
    break;
    
    default:
    
        break;
    }
    
    // seleccion = prompt('Seleccione un articulo para comprar')




function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min) ) + min ;

}

function ordenar() {

    let array = [];

    for (i = 0; i < 5 ; i++){

        array.push(getRandomInt(1, 20));

    }

    console.log('array no oderdenado');


    console.log(array);

    array.sort(function (a,b) {

        return a - b

    })

    console.log('array oderdenado');


    console.log(array);
}

ordenar() 