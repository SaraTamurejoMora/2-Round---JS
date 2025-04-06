import { GestorAlumnos } from "./GestorAlumnos.js";
import { Alumno } from "./Alumno.js";


const alumnosJSON = `[
    {"nombre": "Ana", "apellidos": "Pérez Gómez", "fechaNacimiento": "2005-06-15", "email": "ana.perez@email.com", "ciclo": "DAM", "notas": [8, 7, 9, 6] },
    {"nombre": "Luis", "apellidos": "Gómez Sánchez", "fechaNacimiento": "2004-11-22", "email": "luis.gomez@email.com", "ciclo": "DAW", "notas": [5, 6, 8, 7] },
    {"nombre": "Elena", "apellidos": "Ruiz Fernández", "fechaNacimiento": "2006-02-10", "email": "elena.ruiz@email.com", "ciclo": "DAM", "notas": [9, 9, 10, 8] },
    {"nombre": "Carlos", "apellidos": "López Martínez", "fechaNacimiento": "2003-07-03", "email": "carlos.lopez@email.com", "ciclo": "DAW", "notas": [7, 8, 6, 9] },
    {"nombre": "Marta", "apellidos": "Sánchez Ortega", "fechaNacimiento": "2005-09-14", "email": "marta.sanchez@email.com", "ciclo": "DAM", "notas": [6, 7, 8, 7] },
    {"nombre": "David", "apellidos": "Fernández López", "fechaNacimiento": "2004-05-30", "email": "david.fernandez@email.com", "ciclo": "DAW", "notas": [7, 6, 5, 8] },
    {"nombre": "Laura", "apellidos": "García Romero", "fechaNacimiento": "2006-08-20", "email": "laura.garcia@email.com", "ciclo": "DAM", "notas": [9, 10, 8, 9] },
    {"nombre": "Javier", "apellidos": "Rodríguez Pérez", "fechaNacimiento": "2003-12-12", "email": "javier.rodriguez@email.com", "ciclo": "DAW", "notas": [6, 5, 7, 6] },
    {"nombre": "Beatriz", "apellidos": "Martínez Sánchez", "fechaNacimiento": "2005-07-25", "email": "beatriz.martinez@email.com", "ciclo": "DAM", "notas": [8, 8, 9, 7] },
    {"nombre": "Sergio", "apellidos": "Hernández Ruiz", "fechaNacimiento": "2004-04-17", "email": "sergio.hernandez@email.com", "ciclo": "DAW", "notas": [5, 6, 7, 5] },
    {"nombre": "Cristina", "apellidos": "Díaz Fernández", "fechaNacimiento": "2006-01-09", "email": "cristina.diaz@email.com", "ciclo": "DAM", "notas": [9, 9, 10, 9] },
    {"nombre": "Pablo", "apellidos": "Gómez Ortega", "fechaNacimiento": "2003-10-05", "email": "pablo.gomez@email.com", "ciclo": "DAW", "notas": [7, 8, 7, 6] }
]`;



function llenarGestorInicial(json, gestor){
    const datos = JSON.parse(json);

    for(let dato of datos) {
        let alumno = new Alumno(dato.nombre, dato.apellidos, dato.fechaNacimiento, dato.email, dato.ciclo, dato.notas);
        gestor.agregarAlumno(alumno);
    }

    //comprovo que no accepti repetits (no s'afegirà perquè és un map i no accepta repetits)
    let alumnoRepe = datos[0];
    let alumno = new Alumno(alumnoRepe.nombre, alumnoRepe.apellidos, alumnoRepe.fechaNacimiento, alumnoRepe.email, alumnoRepe.ciclo, alumnoRepe.notas);
    gestor.agregarAlumno(alumno);
}

function muestraResultadoDOM(identificador, resultado, titulo, lista= false) {
    let content = document.getElementById(identificador);

    //título
    let tituloDOM = document.createElement("h4");
    tituloDOM.textContent = titulo;
    content.appendChild(tituloDOM);

    if(lista) {
        for(let element of resultado) {
            let p = document.createElement("p");
            p.innerHTML = " - " + element.getInfo();
            content.appendChild(p);
        }
    } else {
        let p = document.createElement("p");
        p.innerHTML = resultado.getInfo();
        content.appendChild(p);
    }

}

function muestraResultadoConsola(lista, titulo=""){
    console.log(titulo);
    for(let elemento of lista) {
        console.log("\t* "+elemento.getInfo());
    }
}

function init() {
    //1) inicialitzo i omplo el gestor d'alumnes
    let gestorAlumnos = new GestorAlumnos();
    llenarGestorInicial(alumnosJSON, gestorAlumnos);
    muestraResultadoDOM("init", gestorAlumnos.mostrarAlumnos(), "Listado alumnos: ", true);
    muestraResultadoConsola(gestorAlumnos.mostrarAlumnos(), "Listado alumnos:");

    
    //2) mostro alumnes ordenats alfabèticament
    muestraResultadoDOM("lista", gestorAlumnos.listarAlumnos(), "Listado alumnos ordenado alfabéticamente:", true);
    muestraResultadoConsola(gestorAlumnos.listarAlumnos(), "Listado alumnos ordenado alfabéticamente:");

    muestraResultadoDOM("lista", gestorAlumnos.listarAlumnos("DAW"), "Listado alumnos DAW:", true);
    muestraResultadoConsola(gestorAlumnos.listarAlumnos("DAW"), "Listado alumnos (DAW):");

    muestraResultadoDOM("lista", gestorAlumnos.listarAlumnos("DAM"), "Listado alumnos DAM:", true);
    muestraResultadoConsola(gestorAlumnos.listarAlumnos("DAM"), "Listado alumnos (DAM):");


    //3) mostro alumnes per media
    muestraResultadoDOM("media", gestorAlumnos.mostrarAlumnosOrdenados(), "Alumnos Ordenados (por media):", true);
    muestraResultadoConsola(gestorAlumnos.mostrarAlumnosOrdenados(), "Alumnos Ordenados (por media):");

    //4) mostrar alumne concret
    muestraResultadoDOM("alumno", gestorAlumnos.buscarAlumno("Elena Ruiz Fernández"), "Alumno buscado:", false);

    //5) eliminar alumne
    gestorAlumnos.eliminarAlumno("Elena Ruiz Fernández");
    muestraResultadoDOM("eliminar", gestorAlumnos.listarAlumnos(), "Listado alumnos ordenados:", true);
    muestraResultadoConsola(gestorAlumnos.listarAlumnos(), "Listado alumnos:");

}

init();