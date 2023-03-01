const multiplicacion = function (n1,n2) {
    return n1*n2;
  };

const productos = [
    { nombre: "medialunas", precio: 100},
    { nombre: "tortitas negras", precio: 110},
    { nombre: "vigilantes", precio: 90},
    { nombre: "bizcochos de grasa", precio: 80},
    { nombre: "palmeritas", precio: 90},
    { nombre: "bolas de fraile", precio: 110},
];

console.log(productos)
let carrito = []


let seleccion = (prompt ("¡Hola Bienvenidos! ¿desea comprar algún producto?                              si / no"));

while (seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese una opción correcta")
   seleccion = (prompt ("Hola ¿desear realizar alguna compra? Si / No"))
}

if (seleccion === "si") {
    alert ("Gracias! A constinuación nuestra selección de facturas")
    let todosLosProductos = productos.map ((producto) => producto.nombre + " " + "$" + producto.precio);
    alert (todosLosProductos.join (" // "));
} else if (seleccion === "no"){
    alert("Muchas gracias por venir, hasta pronto!!")
}

while (seleccion !="no") {
    let producto = (prompt ("agregue un producto a su carrito"))
    let precio = 0

    if (producto == "medialunas" || producto == "tortitas negras" || producto == "vigilantes" 
    || producto == "bizcochos de grasa" || producto ==  "palmeritas" || producto == "bolas de fraile"){
        switch (producto) {
            case "medialunas":
            precio = 100;
            break;
            case "tortitas negras":
            precio = 110;
            break;
            case "vigilantes":
            precio = 90;
            break;
            case "bizcochos de grasa":
            precio = 80;
            break;
            case "palmeritas":
            precio = 90;
            break;
            case "bolas de fraile":
            precio = 110;
            break;
            default:
            break;
        }
        let unidades = parseInt (prompt("Cuantas unidades quiere llevar?"))
        carrito.push ({producto, unidades, precio})
        
        } else { 
        alert("no contamos con ese producto")
    }
    
    seleccion = (prompt ("Desea seguir comprando?"))
    while (seleccion === "no") {
        alert ("Gracias por su compra! Hasta pronto!")
        carrito.forEach((carritoFinal) => {
            console.log (`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
            total a pagar por producto ${multiplicacion(carritoFinal.unidades,carritoFinal.precio)} `)})
        break;
    }

    }
    console.log(carrito)
    
    //utilizo acc acumulador
    //el elementos
    const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0)
    console.log (`El total a pagar por su compra es de: ${total} `)
   
    
    
      
    

