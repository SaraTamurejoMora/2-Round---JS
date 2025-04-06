// Clase Alumno
const ponderacionesDAM = [0.3, 0.2, 0.3, 0.2]
const ponderacionesDAWe = [0.2, 0.4, 0.2, 0.2]

export class Alumno {
    //Propietats
    nombre;
    apellidos;
    fechaNacimiento;
    email;
    ciclo;
    notas;
    edad;
    media;

    constructor(nombre, apellidos, fechaNacimiento, email, ciclo, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.email = email;
        this.ciclo = ciclo;
        this.notas = notas;
        this.clave = this.nombre + " " + this.apellidos;

        this.calcularMedia();
        this.calcularEdad();
    }

    //Mètodes
    calcularEdad() {
        let edat = 0;
        let dataActual = new Date();
        let dadesN = this.fechaNacimiento.split("-");
        let dataNaixement = new Date(dadesN[0], dadesN[1], dadesN[2]);

        edat = dataActual.getFullYear() - dataNaixement.getFullYear();

        if (dataActual.getMonth() < dataNaixement.getMonth()) {
            edat -= 1;
        } else if (dataActual.getDate() < dataNaixement.getDate()) {
            edat -= 1;
        }

        this.edad = edat;
    }

    calcularMedia() {
        let notaMedia = 0.0;


        if (this.ciclo == "DAM") {
            for (let i = 0; i < this.notas.length; i++) {
                notaMedia += this.notas[i] * ponderacionesDAM[i]
            }
        } else if (this.ciclo == "DAW") {
            for (let i = 0; i < this.notas.length; i++) {
                notaMedia += this.notas[i] * ponderacionesDAWe[i]
            }
        } else {
            console.log("Este ciclo no existe!!!")
        }

        this.media = notaMedia;
    }

    getInfo() {
        return `${this.clave}, ${this.fechaNacimiento}, ${this.edad}, ${this.ciclo}, ${this.media.toFixed(2)}`
    }

    valueOf() {
        return this.media;
    }

    toString() {
        return this.clave
    }


}