// Clase Alumno
const ponderacionesDAM = [0.3, 0.2, 0.3, 0.2]
const ponderacionesDAWe = [0.2, 0.4, 0.2, 0.2]

export class Alumno {

    #nombre
    #apellidos
    #fechaNacimiento
    #email
    #ciclo
    #notas
    notaPoderada

    constructor(nombre, apellidos, fechaNacimiento, email, ciclo, notas) {
        this.#nombre = nombre
        this.#apellidos = apellidos
        this.#fechaNacimiento = fechaNacimiento
        this.#email = email
        this.#ciclo = ciclo
        this.#notas = notas
        this.notaPoderada=this.calcularMedia()

    }

    calcularMedia() {

        let media = 0;
        if (this.#ciclo == "DAW") {

            for (let nota in ponderacionesDAWe) {

                media += this.#notas[nota] * ponderacionesDAWe[nota]
            }
        } else {
            for (let nota in ponderacionesDAM) {

                media += this.#notas[nota] * ponderacionesDAM[nota]
            }

        }

        return media.toFixed(1)
    }

    get nombre() {

        return this.#nombre
    }

    get apellidos(){

        return this.#apellidos
    }
 
    toString() {

        return `Nombre: ${this.#nombre} Apellidos: ${this.#apellidos}`
    }

   getInfo(){

    return `Nombre: ${this.#nombre} Apellidos: ${this.#apellidos} Fecha de nacimiento: ${this.#fechaNacimiento} email: ${this.#email} Ciclo:${this.#ciclo} Media ${this.notaPoderada}`
   }

   valueOf(){
    return this.notaPoderada
   }

}

