
/* aqui se declaram variables globales nesesarias para el funcionamiento del programa*/
const max_programadores_disponibles = 3
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

function displayAllProgramers() {
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

function displayListOfProgramers(list_of_programers) {
    let new_lines = "\n\n"
    list_of_programers.forEach(programer => console.log(new_lines + programer.aTexto()))
}

function checks_if_are_avalible_programers() {
    let are_avalibles = false
    programadores_a_contratar.forEach(element => {
        if (element.tiempo_libre) {
            are_avalibles = true
        }
    })
    return are_avalibles
}

/*
Aqui empiezan las funciones y variables relacionadas con el DOM 
*/
//Variables :


// que bien que me vendria react ahora mismo
// Funciones:
function change_h2_of_dom(){
    h2 = document.querySelector('#are_programers_avalible')
    h2.textContent = "No hay programadores disponibles por el momento :c"
}

function load_programer(programer) {
    const clases_to_use = 'text-center mt-1 text_size_1'

    let tiempo_libre 
    let expeciencia_tiempo = `Tiene: ${programer.expeciencia_tiempo} años de experiencia`

    if (programer.tiempo_libre) {
        tiempo_libre = "¡Esta Disponible!"
    } else {
        tiempo_libre = "No esta disponible"
    }


    const div = document.createElement('div')
    div.classList = 'col mr-4 bg-info border border-2 border-success rounded-3 shadow_custom_black w-25 m-3'

    const h2_name = document.createElement("h2")
    h2_name.classList = clases_to_use
    h2_name.textContent = programer.nombre

    const h3_title = document.createElement('h3')
    h3_title.classList = clases_to_use
    h3_title.textContent = programer.titulo

    const h3_expirience = document.createElement('h3')
    h3_expirience.classList = clases_to_use
    h3_expirience.textContent = expeciencia_tiempo

    const h3_disponible = document.createElement('h3')
    h3_disponible.classList = clases_to_use
    h3_disponible.textContent = tiempo_libre

    div.append(h2_name, h3_title, h3_expirience, h3_disponible)

    let container_content = document.querySelector(".content_1")

    container_content.append(div)

}

function display_all_programers_in_dom() {
    programadores_a_contratar.forEach(programer => {
        load_programer(programer)
    })
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

/* Aqui empieza las funciones de filtrado de usuarios */

function filterProgramerByName(name) {
    alert("En la consola estan los resultados")
    let result_get = null
    result_get = programadores_a_contratar.filter(programer => programer.nombre === name)
    debugger
    if (typeof result_get !== "undefined" && result_get.length === 0) {
        debugger
        console.log("No se encontraron resultados coincidentes")
        return false
    } else if (result_get.length == 0) {
        debugger
        console.log("No se encontraron resultados coincidentes")
        return false
    } else {
        console.log("Estos son los resultados encontrados:\n")
        displayListOfProgramers(result_get)
        return true
    }
}

function filterProgramerByTitle(Title) {
    alert("En la consola estan los resultados")
    const result_get = programadores_a_contratar.filter(programer => programer.titulo === Title)
    if (result_get === null) {
        console.log("No se encontraron resultados coincidentes")
        return false
    } else {
        console.log("Estos son los resultados encontrados:\n")
        displayListOfProgramers(result_get)
        return true
    }
}

function filterProgramerByWorkExpirence(expeciencia_tiempo) {
    alert("En la consola estan los resultados")
    const result_get = programadores_a_contratar.filter(programer => programer.expeciencia_tiempo >= expeciencia_tiempo)
    if (result_get === null) {
        console.log("No se encontraron resultados coincidentes")
        return false
    } else {
        console.log("Estos son los resultados encontrados:\n")
        displayListOfProgramers(result_get)
        return true
    }
}

function filterProgramerByFreeTime(tiempo_libre) {
    alert("En la consola estan los resultados")
    const result_get = programadores_a_contratar.filter(programer => Boolean(programer.tiempo_libre) === Boolean(tiempo_libre))
    if (result_get === null) {
        console.log("No se encontraron resultados coincidentes")
        return false
    } else {
        console.log("Estos son los resultados encontrados:\n")
        displayListOfProgramers(result_get)
        return true
    }
}




/* Aqui empieza la ejecucion del programa */





for (let i = 0; i < programadores_disponibles; i++) {
    programadores_a_contratar.push(getRandomProgramer())
}

display_all_programers_in_dom()

if(!checks_if_are_avalible_programers()){
    change_h2_of_dom()
}



