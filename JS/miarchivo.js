//al momento de abrir aparece un recuadro que te hace aceptar//
var contador;
 for(contador=1; contador <= 5; contador++ )
{
    if( contador == 3)
         continue;
    alert( "Hay que aceptar esto para acceder a un descuento increible [" + contador + "]" );
}

//ejecuta descuento segun porcentaje//

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
   if (descuentofinal = "30%")
      alert ("felicidades ") (cliente) ("accediste") (descuento) ("con") (descuentofinal)
    }

   
    // arrays //

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

//interactuar con html//

const items = document.getElementById('items')

const tarjetas = document.getElementById('tarjetas').content

const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
    datosUsuarios();
})

const datosUsuarios = async () => {
    try {

        const res = await fetch('https://jsonplaceholder.typicode.com/users')

        const datos = await res.json()

        usuarios(datos)

    } catch (error) {

        console.log(error);

    }
}

const usuarios = datos => {
    datos.forEach(
        usuario => {
            tarjetas.querySelector('h5').textContent = usuario.name
            tarjetas.querySelector('p').textContent = usuario.company.catchPhrase
            tarjetas.querySelector('.enlace').dataset.id = usuario.id

            const clone = tarjetas.cloneNode(true)
            fragment.appendChild(clone)
        }
    )
    items.appendChild(fragment)
} 

//incorporando eventos//

window.addEventListener = () => {
            let div = document.querySelector('#formulario');
            div.style.visibility = 'hidden';
            let boton = document.querySelector('#mostrar');
            boton.addEventListener('click', function (e) {
                if(div.style.visibility === 'hidden'){
                    div.style.visibility = 'visible';
                }else{
                    div.style.visibility = 'hidden';
                }
            });
        } 