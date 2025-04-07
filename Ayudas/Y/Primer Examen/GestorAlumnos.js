import { Alumno } from "./Alumno.js";
// Clase GestorAlumnos
export class GestorAlumnos {

    #alumnos

    constructor() {

        this.#alumnos = []
    }

    agregarAlumno(alumno) {

        if (!this.yaExisteElAlumno(alumno)) {
            this.#alumnos.push(alumno)
        }

        //console.log(this.#alumnos)

        return this.#alumnos

    }
    buscarAlumno(nombreCompleto) {

        const nombre = nombreCompleto.split(" ")

        //console.log(nombre)
        const apellido = `${nombre[1]} ${nombre[2]}`
        //console.log(apellido)

        const alumnoDevolver = this.#alumnos.find(alumno => {
            if (alumno.nombre == nombre[0] && alumno.apellidos == apellido) {

                return alumno.toString
            }

        })
        return alumnoDevolver
    }

    mostrarAlumnosOrdenados() {
        const listaOrdenadaPorMedia = this.#alumnos.sort((a, b) => {
            b.notaPoderada - a.notaPoderada
        })
        console.log(listaOrdenadaPorMedia)

        return listaOrdenadaPorMedia
    }

    eliminarAlumno(nombreCompleto) {

        const nombre = nombreCompleto.split(" ")

        //console.log(nombre)
        const apellido = `${nombre[1]} ${nombre[2]}`
        //console.log(apellido)

        const index = this.#alumnos.findIndex(alumno => {

            if (alumno.nombre == nombre[0] && alumno.apellidos == apellido) {

                return alumno
            }

        })

        this.#alumnos.splice(index, 1)
        //console.log(this.#alumnos)

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