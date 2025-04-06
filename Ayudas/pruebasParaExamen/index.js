import { GestorProductos } from "./GestorProductos.js";
import { Producto } from "./Producto.js";

const productosJSON = `[
    {"id": 1, "nombre": "Camiseta", "categoria": "Ropa", "referencia": "CAM123", "IVA": 21, "stock": 100, "precio": 15.99},
    {"id": 2, "nombre": "Pantalón", "categoria": "Ropa", "referencia": "PAN456", "IVA": 21, "stock": 50, "precio": 25.99},
    {"id": 3, "nombre": "Zapatillas", "categoria": "Calzado", "referencia": "ZAP789", "IVA": 21, "stock": 200, "precio": 35.99},
    {"id": 4, "nombre": "Gorra", "categoria": "Accesorios", "referencia": "GOR101", "IVA": 21, "stock": 150, "precio": 9.99},
    {"id": 5, "nombre": "Chaqueta", "categoria": "Ropa", "referencia": "CHA112", "IVA": 21, "stock": 30, "precio": 49.99},
    {"id": 6, "nombre": "Bufanda", "categoria": "Accesorios", "referencia": "BUF131", "IVA": 21, "stock": 80, "precio": 12.99},
    {"id": 7, "nombre": "Guantes", "categoria": "Accesorios", "referencia": "GUA415", "IVA": 21, "stock": 60, "precio": 8.99},
    {"id": 8, "nombre": "Sudadera", "categoria": "Ropa", "referencia": "SUD161", "IVA": 21, "stock": 40, "precio": 29.99},
    {"id": 9, "nombre": "Botines", "categoria": "Calzado", "referencia": "BOT718", "IVA": 21, "stock": 120, "precio": 55.99},
    {"id": 10, "nombre": "Cinturón", "categoria": "Accesorios", "referencia": "CIN192", "IVA": 21, "stock": 90, "precio": 14.99}
]`;

function muestraResultadoDOM(identificador, resultado) {
    let content = document.getElementById(identificador);
    let p = document.createElement("p");
    p.innerHTML = " " + resultado;
    content.appendChild(p);
}

function init() {
    var gestorProductos = new GestorProductos();

    const JSONData = JSON.parse(productosJSON);
    console.log(JSONData);

    for (let producto of JSONData) {
        gestorProductos.agregarProducto(
            new Producto(
                producto.id,
                producto.nombre,
                producto.categoria,
                producto.referencia,
                producto.IVA,
                producto.stock,
                producto.precio
            )
        );
    }

    // Mostrar lista de productos ordenados alfabéticamente por nombre
    let productosOrdenadosNombre = gestorProductos.mostrarProductosOrdenadosPorNombre();
    muestraResultadoDOM('#resultado', productosOrdenadosNombre);

    // Mostrar lista de productos ordenados por precio
    const productosOrdenadosPrecio = gestorProductos.mostrarProductosOrdenadosPorPrecio();
    muestraResultadoDOM('#resultado', productosOrdenadosPrecio.map(p => p.toString()).join('<br>'));

    // Buscar y mostrar información de un producto específico por ID
    var producto = gestorProductos.buscarProductoPorId(3); // Por ejemplo, buscar producto con ID 3
    if (producto) {
        muestraResultadoDOM('#resultado', `Producto encontrado: ${producto.toString()}`);
    } else {
        console.log("El producto no existe");
    }

    // Eliminar un producto por ID y mostrar la lista actualizada
    gestorProductos.eliminarProducto(3); // Eliminar producto con ID 3
    productosOrdenadosNombre = gestorProductos.mostrarProductosOrdenadosPorNombre();
    muestraResultadoDOM('#resultado', 'Lista de productos después de la eliminación:<br>' + productosOrdenadosNombre.map(p => p.toString()).join('<br>'));
}

init();
