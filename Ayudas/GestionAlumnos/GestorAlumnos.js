import { Alumno } from "./Alumno.js";
// Clase GestorAlumnos
export class GestorAlumnos {
    constructor(){
        this.alumnos = new Map();
    }

    agregarAlumno(alumno){
        this.alumnos.set(alumno);
    }
    buscarAlumno(nombreCompleto){
        console.log(nombreCompleto)
        for(let alumno of this.alumnos.keys()){
            if("" + alumno.nombre + " " + alumno.apellidos == nombreCompleto){
                return alumno      
            }
        }
        
    }

    eliminarAlumno(nombreCompleto){
        let alumnoBuscado = this.buscarAlumno(nombreCompleto)
        this.alumnos.delete(alumnoBuscado)
    }
    mostrarAlumnosOrdenados(){
        let resultado = Array.from(this.alumnos.keys())
        resultado.sort(function(a,b){
            let textoA = a.nombre
            let textoB = b.nombre
            return (textoA < textoB) ? -1 : (textoA > textoB) ? 1 : 0;
        })
        return resultado
    }

    mostrarAlumnosOrdenadosMedia(){
        let resultado = Array.from(this.alumnos.keys())
        resultado.sort(function(a,b){
            let textoA = a.media
            let textoB = b.media
            return (textoA < textoB) ? -1 : (textoA > textoB) ? 1 : 0;
        })
        return resultado
    }

    listarAlumnos(){}

    

}