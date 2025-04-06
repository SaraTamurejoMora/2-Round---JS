import { Alumno } from "./Alumno.js";
// Clase GestorAlumnos
export class GestorAlumnos {
    constructor(){
        this.listaAlumnos = [];
    }

    guardarAlumnos(alumnosJSON){
        let alumnosExtraidos = JSON.parse(alumnosJSON)
        for(let alumno of alumnosExtraidos){
            let nuevoAlumno = new Alumno(alumno.nombre,alumno.apellidos,alumno.fechaNacimiento,alumno.email,alumno.ciclo,alumno.notas)
            this.listaAlumnos.push(nuevoAlumno)
        }
    }

    agregarAlumno(alumno){
        this.listaAlumnos.push(alumno)

    }

    buscarAlumno(nombreCompleto){
        
    }

    eliminarAlumno(nombreCompleto){
        
    }

    mostrarAlumnosOrdenados(){
        this.listaAlumnos.sort(function(a,b){
            let textoA = a.nombre
            let textoB = b.nombre
            return (textoA < textoB) ? -1 : (textoA > textoB) ? 1 : 0;
        })
    }

    /*mostrarAlumnosOrdenadosMedia(listaAlumnos){
        this.listaAlumnos.sort(function(a,b){
            let mediaA = a.
            let mediaB = 
        })
    }*/

    listarAlumnos(){}
}


