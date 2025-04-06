import { Alumno } from "./Alumno.js";
// Clase GestorAlumnos
export class GestorAlumnos {
    //Propietats
    alumnos;

    constructor() {
        this.alumnos = new Map();
    }

    //Mètodes
    agregarAlumno(alumno) {
        //if(!this.#existeAlumno(alumno.clave)) {
            this.alumnos.set(alumno.clave, alumno);
        //} else {
            //console.log("Este alumno YA existe.");
        //}
    }

    buscarAlumno(nombreCompleto) {
        if(this.#existeAlumno(nombreCompleto)) {
            return this.alumnos.get(nombreCompleto);
        } else {
            console.log("Este alumno NO existe!");
        }

    }

    eliminarAlumno(nombreCompleto) {
        if(this.#existeAlumno(nombreCompleto)) {
            this.alumnos.delete(nombreCompleto);
        } else {
            console.log("Este alumno NO existe!");
        }
        
    }

    mostrarAlumnosOrdenados() {
        let alumnosValores = Array.from(this.alumnos.values());
        //ordeno per media
        alumnosValores.sort((a,b) => b - a);

        return alumnosValores;

    }

    listarAlumnos(optativoFiltro) {
        let alumnosValores = Array.from(this.alumnos.values());

        //filtro alumnes
        if(optativoFiltro) {
            let alumnosFiltrados = alumnosValores.filter((alumno) => alumno.ciclo == optativoFiltro);
            alumnosValores = alumnosFiltrados;
        }

        //ordeno alumnes
        alumnosValores.sort();


        return alumnosValores;

    }

    mostrarAlumnos() {
        let alumnosValores = Array.from(this.alumnos.values());

        return alumnosValores;
    }

    //Mètode helper
    #existeAlumno(claveAlumno) {
        let claves = new Set (this.alumnos.keys());
        if(claves.has(claveAlumno)) {
            return true;
        } else {
            return false;
        }
    }
}