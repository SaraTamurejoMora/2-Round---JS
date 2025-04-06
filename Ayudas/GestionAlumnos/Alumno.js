// Clase Alumno
const ponderacionesDAM=[0.3, 0.2, 0.3, 0.2]
const ponderacionesDAWe=[0.2, 0.4, 0.2, 0.2]

export class Alumno {
    nombre;
    apellidos;
    fechaNacimiento;
    email;
    ciclo;
    notas;
    media;

    constructor(nombre,apellidos,fechaNacimiento,email,ciclo,notas){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.email = email;
        this.ciclo = ciclo;
        this.notas = notas;
        this.media = this.calcularMedia();

    }
    
    calcularMedia(){
        let total = 0;
        if(this.ciclo == "DAW"){
            for(let i in this.notas){
               total += this.notas[i] * ponderacionesDAWe[i]
               
            }
        }else{
            for(let i in this.notas){
              total += this.notas[i] * ponderacionesDAM[i]      
            }
        }
        return total.toFixed(2)
    }

    calcularEdad(){}

    toString(){
        return `Nombre: ${this.nombre} Apellidos: ${this.apellidos} Fecha de nacimieto: ${this.fechaNacimiento} Email: ${this.email} Ciclo: ${this.ciclo} Notas: ${this.notas} Media: ${this.media} <br>`
    }

}