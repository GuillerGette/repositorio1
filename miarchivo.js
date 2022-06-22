//al momento de abrir aparece un recuadro que te hace aceptar//
var contador;
 for(contador=1; contador <= 3; contador++ )
{
    if( contador == 3)
         continue;
    alert( "Hay que aceptar esto para acceder a un descuento increible [" + contador + "]" );
}

//ejecuta descuento segun porcentaje//


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    return precioConDescuento;
  }
  
  function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
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

        //Aplicando JQuery//

jQuery.fn.ctrlEnter = function (botones, funcion) {  
  var texto   = jQuery(this);  
 botones = jQuery(botones);  
}; 
        
function realizaAccion(e) {  
  fn.call(texto, e);  
} 

texto.bind("keydown", function (e) {  
    if (e.keyCode === 13 && e.ctrlKey) {  
      realizaAccion(e);  
      e.preventDefault();  
    }  
  });  
  botones.bind("click", realizaAccion);

  jQuery("#msg").ctrlEnter("#botonEnviar", function () {  
    jQuery("<p class='parrafos'></p>").append(this.val().replace(/\n/g, "<br />")).prependTo(document.body);  
    this.val("");  
  });  

  //FETCH  EN EL PROYECTO

  function sendData () {
    
    // Obtener datos
    var data = new FormData();
    data.append("name", document.getElementById("name").value);
    data.append("email", document.getElementById("email").value);
   
    // init fetch
    fetch("2-dummy.php", {
      method: "POST",
      body: data
    })
   
    // devuelve rta del servidor en forma de texto
    .then((result) => {
      if (result.status != 200) { throw new Error("Bad Server Response"); }
      return result.text();
    })
   
    // rta servidor
    .then((response) => {
      console.log(response);
    })
   
    // manejo de errores (opcional)
    .catch((error) => { console.log(error); });
   
    // previene submit 
    return false;  }