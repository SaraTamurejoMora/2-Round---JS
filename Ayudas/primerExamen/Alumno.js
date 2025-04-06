// Clase Alumno
const ponderacionesDAM = [0.3, 0.2, 0.3, 0.2]
const ponderacionesDAWe = [0.2, 0.4, 0.2, 0.2]

export class Alumno {
    constructor(nombre, apellido, fechaNaciemiento, email, ciclo, notas) {
        this.nombre = nombre;
        this.apellidos = apellido;
        this.fechaNaciemiento = fechaNaciemiento;
        this.email = email;
        this.ciclo = ciclo;
        this.notas = notas;
    }

    toString() {
        return `Nombre: ${this.nombre} ${this.apellidos} Fecha Nacimiento: ${this.fechaNaciemiento} Email: ${this.email} Ciclo: ${this.ciclo} Notas: ${this.notas} <br>`

    }



    cacularEdad(fechaNaciemiento) {

        let hoy = new Date()

        let array_fecha = fechaNaciemiento.split("-")
        console.log(array_fecha)

        let ano;
        ano = parseInt(array_fecha[2]);

        let mes;
        mes = parseInt(array_fecha[1]);


        let dia;
        dia = parseInt(array_fecha[0]);
        if (isNaN(dia)) {
            return false
        }

        return edad
    }

    /*calcularMedia(ponderacionesDAM,ponderacionesDAWe,listaAlumnos){
        let media = 0;
        for(let alumno of listaAlumnos){
            if(alumno.ciclo == "DAW"){
                    media = (alumno.notas[0] * ponderacionesDAWe[0] + alumno.notas[1] * ponderacionesDAWe[1] + alumno.notas[2] * ponderacionesDAWe[2] + alumno.notas[3] * ponderacionesDAWe[3])  
                   //this.listaAlumnos.push(media)
                    console.log(media)
                
                return media
            }

            if(alumno.ciclo == "DAM"){
                    media = (alumno.notas[0] * ponderacionesDAM[0] + alumno.nota[1] * ponderacionesDAM[1] + alumno.nota[2] * ponderacionesDAM[2] + alumno.notas[3] * ponderacionesDAM[3])
                    //this.listaAlumnos.push(media)
                    console.log(media)

                return media
            }
        }
        


    }
    */







}