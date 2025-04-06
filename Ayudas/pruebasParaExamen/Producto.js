// Clase Producto

export class Producto {
    id;
    nombre;
    categoria;
    referencia = new Set();
    IVA;
    stock;
    precio;

    constructor(id, nombre, categoria, referencia, IVA, stock, precio) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.referencia = new Set(referencia);
        this.IVA = IVA;
        this.stock = stock;
        this.precio = precio;
    }

    // Método toString para representar el objeto como una cadena
    toString() {
        return `Producto: ${this.nombre}, Categoría: ${this.categoria}, Precio: ${this.precio}€`;
    }

    // Método para calcular el precio con IVA
    calcularPrecioConIVA() {
        return this.precio * (1 + this.IVA / 100);
    }

    // Método para verificar si hay stock disponible
    hayStock() {
        return this.stock > 0;
    }

    // Método para actualizar el stock después de una venta
    vender(cantidad) {
        if (cantidad <= this.stock) {
            this.stock -= cantidad;
            return `Venta realizada. Stock restante: ${this.stock}`;
        } else {
            return 'Stock insuficiente para realizar la venta.';
        }
    }
}
