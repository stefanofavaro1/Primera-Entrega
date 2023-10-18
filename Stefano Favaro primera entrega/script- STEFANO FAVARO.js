
alert("Ingrese la opcion del producto que desea llevar, para salir ingrese 0")
let seleccionarProductos = Number(prompt( "1 Fuente de poder 750W $44900- 2 Procesador ryzen 5 5600 $122200 - 3 Gabinete Gamer $55400 - 4 Monitor Samsung T350 24 $90000  "))
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
  return cant * precio
}


while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= Number(prompt("el producto seleccionado es Fuente de poder 750W , indique la cantidad"))
            total += cantidad(seleccionarCantidad, 44900)
      break;
      case 2:
        seleccionarCantidad = Number(prompt("el producto seleccionado es Procesador ryzen 5 5600 , indique la cantidad"))
        total += cantidad(seleccionarCantidad, 122200)
      break;
    case 3:
      seleccionarCantidad = Number(prompt("el producto seleccionado es Gabinete Gamer , indique la cantidad"))
      total += cantidad(seleccionarCantidad, 55400)
    break;
    case 4:
      seleccionarCantidad = Number(prompt("el producto seleccionado es Monitor Samsung T350 24 , indique la cantidad"))
      total += cantidad(seleccionarCantidad, 90000)
    break;

    default:
      break;
  }
  seleccionarProductos = Number(prompt( " 1 Fuente de poder 750W $44900- 2 Procesador ryzen 5 5600 $122200 - 3 Gabinete Gamer $55400 - 4 Monitor Samsung T350 24 $90000 "))
}

alert("el total de la compra es de: " + total)


const envio = () => {
    if (total >= 10000) {
      alert("El envio es gratuito")
    }else{
      total += 1000
      alert("el costo de envio es de 1000, el total es: " + total)
    }
}

// envio()

const metodoDePago = () => {
  let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo" )
  if (metodo == "tarjeta") {
    total *= 1.1
    console.log(total);
  }else if ( metodo == "efectivo") {
    total -= 1000
    alert("tenes un descuento de 1000, el total es:" + total)
  }

  
}

metodoDePago()

