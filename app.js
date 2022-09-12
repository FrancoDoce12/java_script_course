
/* aqui se declaram variables globales nesesarias para el funcionamiento del programa*/
const max_programadores_disponibles = 7
const min_programadores_disponibles = 3
const programadores_disponibles = getRandomNumberBetween(min_programadores_disponibles, max_programadores_disponibles)


const posibles_nombres = [
    "Hugo", "Lucas", "Martín", "Daniel", "Pablo", "Mateo", "Alejandro", "Leo", "Álvaro", "Manuel"
]

const posibles_apellidos = [
    "García", "Rodríguez", "González", "Fernández", "López", "Martínez", "Sánchez", "Pérez"
]

const posibles_trabajos = [
    "Web Designer", "Font End Developer", "Back End Developer", "Full Stack Developer",
    "AI Models Designer", "Data Scientist", "Data Visualisation and Manangment",
    "Administation Cross Plataform Developer"
]

let programadores_a_contratar = []



/* Aqui estan todas las clases */

class Programador {
    constructor(nombre, expeciencia_tiempo, titulo, tiempo_libre) {
        this.nombre = nombre
        this.expeciencia_tiempo = expeciencia_tiempo
        this.titulo = titulo
        this.tiempo_libre = tiempo_libre
    }
    contratar() {
        if (this.tiempo_libre) {
            this.tiempo_libre = false
            alert(`Programador${this.nombre} contratado`)
        }
        else {
            alert(`El Programador ${this.nombre} Ya a sido contratado por otra persona`)
        }
    }
    sacarDisponible() {
        this.tiempo_libre = false
    }
    hacerDisponible() {
        this.tiempo_libre = true
    }

    aTexto() {
        return `${this.nombre}:\nEs "${this.titulo}"\nTiene ${this.expeciencia_tiempo} Años de experiencia\n¿Disponible? ${Boolean(this.tiempo_libre)}`
    }
}


/*La funcion getRandomNumberBetween() la saque de internet */

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



function getRandomElementOfaList(list) {
    let max_index = list.length - 1
    return list[getRandomNumberBetween(0, max_index)]
}

function display_programers() {
    console.clear()
    let display_programers = ""
    i = 0
    let new_line = "\n"
    programadores_a_contratar.forEach(element => {
        i++
        display_programers = `${display_programers}` + `${new_line}` + `${new_line}` + `${i}.` + `${new_line}` + element.aTexto()
    })
    console.log(display_programers)
    return display_programers
}

function checks_if_are_avalible_programers(){
    let are_avalibles = false
    programadores_a_contratar.forEach(element => {
        if(element.tiempo_libre){
            are_avalibles = true
        }
    })
    return are_avalibles
}

/*Aqui empieza las funciones usadas para generar programadores */

function getRandomProgramer() {
    return new Programador(
        getRandomElementOfaList(posibles_nombres) + " " + getRandomElementOfaList(posibles_apellidos),
        getRandomNumberBetween(0, 30),
        getRandomElementOfaList(posibles_trabajos),
        getRandomNumberBetween(false, true)
    )
}

/* Aqui empieza la ejecucion del programa */


alert("En esta pagina vas a poder contratar programadores")
alert(`Hay ${programadores_disponibles} programadores en esta pagina para contratar`)


for (let i = 0; i < programadores_disponibles; i++) {
    programadores_a_contratar.push(getRandomProgramer())
}


alert("La Lista de programadores que esta pagina puede ofrecer esta en la CONSOLA")



let programa_prendido = true

while (programa_prendido) {

    display_programers()

    if (!checks_if_are_avalible_programers()){
        alert("Lo sentimos, no hay programadores libres por el momento, han sido todos contratados\n¡Vuelva mas tarde!")
        break
    }

    let programador_seleccionado = parseInt(prompt("Ingrese el numero del programador que dese contratar")) - 1

    let programador_contratado = programadores_a_contratar[programador_seleccionado]
    if (programador_seleccionado > programadores_a_contratar.length) {
        alert("El programador seleccionado no existe")
        continue
    } else if (programador_contratado.tiempo_libre) {
        let confirmacion = prompt("¿Este es el programador que desea contratar?(S/N)\n" + programadores_a_contratar[programador_seleccionado].aTexto())
        console.log(confirmacion)
        if (confirmacion.toUpperCase() === "S") {
            programadores_a_contratar[programador_seleccionado].sacarDisponible()
            alert(`¡El Programador ${programador_contratado.nombre} a sido contratado !!`)
            continue
        } else {
            alert(`Okey, el programador ${programadores_a_contratar[programador_seleccionado].nombre} NO a sido contratado\ny la transaccion a sido cancelada`)
            continue
        }
    }
    else {
        alert(`El Programador \"${programador_contratado.nombre}\" no tiene tiempo libre ahora mismo`)
    }
}
alert("Gracias por si visita!")
alert("Chaaaauuuu")
alert("Nos vemoooss!!")
alert("Buenas Noches")
alert("bue cuando te vas?")
alert("Que haces acá aún?")
alert("Queres que te ejecute un loop infinito??")
alert("Entonces andate sfjdsgds ;3")