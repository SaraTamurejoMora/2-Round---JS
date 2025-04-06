// Importamos la clase Producto
import { Producto } from './Producto.js';

// Clase GestorProductos
export class GestorProductos {
    constructor() {
        this.productos = [];
    }

    // Agrega un nuevo producto si no existe otro con el mismo id
    agregarProducto(productoNuevo) {
        if (!this.buscarProductoPorId(productoNuevo.id)) {
            this.productos.push(productoNuevo);
        } else {
            console.log(`El producto con ID ${productoNuevo.id} ya existe.`);
        }
    }

    // Busca un producto por su ID
    buscarProductoPorId(id) {
        return this.productos.find(producto => producto.id === id) || null;
    }

    // Busca un producto por su nombre
    buscarProductoPorNombre(nombre) {
        return this.productos.find(producto => producto.nombre === nombre) || null;
    }

    // Elimina un producto por su ID
    eliminarProducto(id) {
        const indice = this.productos.findIndex(producto => producto.id === id);
        if (indice !== -1) {
            this.productos.splice(indice, 1);
            console.log(`Producto con ID ${id} eliminado.`);
        } else {
            console.log(`No se encontró ningún producto con ID ${id}.`);
        }
    }

    // Muestra la lista de productos ordenados por nombre
    mostrarProductosOrdenadosPorNombre() {
        return [...this.productos].sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    // Muestra la lista de productos ordenados por precio
    mostrarProductosOrdenadosPorPrecio() {
        return [...this.productos].sort((a, b) => a.precio - b.precio);
    }

    // Lista todos los productos
    listarProductos() {
        return this.productos;
    }
}
