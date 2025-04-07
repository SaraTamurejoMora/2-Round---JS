import { Alumno } from "./Alumno.js";
// Clase GestorAlumnos
export class GestorAlumnos {

    #alumnos
    #clave

    constructor() {

        this.#alumnos = new Map()
    }

    agregarAlumno(alumno) {

        if (!this.yaExisteElAlumno(alumno)) {
            this.#alumnos.set(alumno.nombre + " " + alumno.apellidos ,alumno)
            this.#clave=alumno.nombre + " " + alumno.apellidos 
        }

        //console.log(this.#alumnos)

        return this.#alumnos

    }
    buscarAlumno(nombreCompleto) {

        const alumnoDevolver = this.#alumnos.get(nombreCompleto)
       // console.log(alumnoDevolver)
           
        return alumnoDevolver
    }

    mostrarAlumnosOrdenados() {

    
    const arrayAlumnos=[...this.#alumnos.values()]
    //mostrar lista ordenada alfabeticamente
    //console.log(arrayAlumnos)
    
        const listaOrdenadaPorMedia = arrayAlumnos.sort((a, b) => {
            return b.notaPoderada - a.notaPoderada
        })
        //console.log("alumnos ordenados por nota ponderada");
        //console.log(listaOrdenadaPorMedia)

        return listaOrdenadaPorMedia
    }

    eliminarAlumno(nombreCompleto) {

        
        this.#alumnos.delete(nombreCompleto)
        console.log(this.#alumnos)

        return this.#alumnos

    }
    yaExisteElAlumno(alumnonuevo) {

        //console.log(alumnonuevo.nombre)

        this.#alumnos.forEach(alumno => {

            if ((alumno.nombre == (alumnonuevo.nombre)) && alumno.apellido == (alumnonuevo.apellidos)) {

                //console.log(alumno.nombre)
                // console.log("ya existe")
                return true

            } else {
                //console.log("alumno nuevo")
                return false

            }

        })

    }


    get alumnos() {
        return this.#alumnos
    }

}