
/* aqui se declaram variables globales nesesarias para el funcionamiento del programa*/


//  variables relacionadas con generar programadores aleatorios

const max_programadores_disponibles = 5
const min_programadores_disponibles = 20
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

// el resto de las variables globales

let programadores_a_contratar = []

// variables de referencia con la local storage

const key_of_programers = 'programers'

// changes es un objeto que basicamente representa la ruta de cambios echos
const key_of_changes = 'changes'


// la clase programador esta en deffinitions,js





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


function checks_if_are_avalible_programers() {
    let are_avalibles = false
    programadores_a_contratar.forEach(element => {
        if (element.tiempo_libre) {
            are_avalibles = true
        }
    })
    return are_avalibles
}


function programadroes_aleatorios() {
    let programerss = []
    for (let i = 0; i < programadores_disponibles; i++) {
        programerss.push(getRandomProgramer())
    }
    return programerss
}

function transformar_programador_obj_a_class(array_objetos_programer, todos_disponibles) {
    let array_programadores = []
    array_objetos_programer.forEach(programer => {
        array_programadores.push(
            new Programador(
                programer.nombre, programer.expeciencia_tiempo, programer.titulo, todos_disponibles ? todos_disponibles : programer.tiempo_libre
            )
        )
    })
    return array_programadores
}



// aqui empiezan funciones refericas con el fetch y con la interaccion con la base de datos




async function load_programers_from_db() {

    try {
        let data = await (await fetch("../db.json")).json()
        put_programers_in_dom(transformar_programador_obj_a_class(data))
        chechs_if_there_are_programers_to_h2()
    }
    catch (error) {
        console.error(error)
    }

    debugger
    // load_changes_and_programers()
    //put_programers_in_dom(programadores_a_contratar)
    debugger
}

function put_programers_in_dom(data) {
    programadores_a_contratar = data
    clear_dom()
    start_page(data)
}



/*
Aqui empiezan las funciones relacionadas con el DOM
*/


// Funciones:

function clear_dom() {
    let container_content = document.querySelector(".content_1")
    removeAllChildNodes(container_content)
}

function add_evet_listener_to_button_reload_programers() {


    let button = document.querySelector("#reload_programers")
    button.addEventListener('click', async () => {
        let caca = await notify_reload_programers()
        if (caca) {
            restaurar_datos()
            // cargar denuevo los datos y mostrar los datos actualizados
            swal({
                title: "Datos Restaurados",
                icon: "success"
            })
        } else {
            swal({
                title: "Accion cancelada",
            })
        }
    })
}

function change_h2_of_dom() {
    h2 = document.querySelector('#are_programers_avalible')
    h2.textContent = "No hay programadores disponibles por el momento :c"
}

function load_programer(programer) {
    const clases_to_use = 'text-center mt-1 text_size_1'

    let h3_tiempo_libre
    let boton_contratar = false
    let expeciencia_tiempo = `Tiene: ${programer.expeciencia_tiempo} años de experiencia`




    if (programer.tiempo_libre) {
        h3_tiempo_libre = document.createElement('h3')
        h3_tiempo_libre.textContent = "¡Esta Disponible!"
        h3_tiempo_libre.classList = 'text-center mt-1 text_size_1 text-success'

        boton_contratar = document.createElement('button')
        boton_contratar.classList = 'my-1 text_size_1 btn btn-primary w-100'
        boton_contratar.textContent = '¡Contratar Ya!'
        boton_contratar.addEventListener('click', () => {
            notify(`Contrataste a ${programer.nombre}`)
            click_contratar(programer)
        })
    } else {
        h3_tiempo_libre = document.createElement('h3')
        h3_tiempo_libre.textContent = "No esta disponible"
        h3_tiempo_libre.classList = 'text-center mt-1 text_size_1 text-warning'
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


    div.append(h2_name, h3_title, h3_expirience, h3_tiempo_libre)


    boton_contratar ? div.append(boton_contratar) : console.log()
    // if (boton_contratar) {
    //     div.append(boton_contratar)
    // }

    let container_content = document.querySelector(".content_1")

    container_content.append(div)
}

function click_contratar(programer) {
    programer.sacarDisponible()
    clear_dom()
    start_page(programadores_a_contratar)
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function display_programers_in_dom(list_of_programers) {
    list_of_programers.forEach(programer => {
        load_programer(programer)
    })
}

function chechs_if_there_are_programers_to_h2() {
    if (!checks_if_are_avalible_programers()) {
        change_h2_of_dom()
        notify("Se acabaron los programadores disponibles")
    }
}

function start_page(list_of_programers) {
    display_programers_in_dom(list_of_programers)
    chechs_if_there_are_programers_to_h2()
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

// function filterProgramerByName(name) {
//     alert("En la consola estan los resultados")
//     let result_get = null
//     result_get = programadores_a_contratar.filter(programer => programer.nombre === name)
//     if (typeof result_get !== "undefined" && result_get.length === 0) {
//         console.log("No se encontraron resultados coincidentes")
//         return false
//     } else if (result_get.length == 0) {
//         console.log("No se encontraron resultados coincidentes")
//         return false
//     } else {
//         console.log("Estos son los resultados encontrados:\n")
//         displayListOfProgramers(result_get)
//         return true
//     }
// }

// function filterProgramerByTitle(Title) {
//     alert("En la consola estan los resultados")
//     const result_get = programadores_a_contratar.filter(programer => programer.titulo === Title)
//     if (result_get === null) {
//         console.log("No se encontraron resultados coincidentes")
//         return false
//     } else {
//         console.log("Estos son los resultados encontrados:\n")
//         displayListOfProgramers(result_get)
//         return true
//     }
// }

// function filterProgramerByWorkExpirence(expeciencia_tiempo) {
//     alert("En la consola estan los resultados")
//     const result_get = programadores_a_contratar.filter(programer => programer.expeciencia_tiempo >= expeciencia_tiempo)
//     if (result_get === null) {
//         console.log("No se encontraron resultados coincidentes")
//         return false
//     } else {
//         console.log("Estos son los resultados encontrados:\n")
//         displayListOfProgramers(result_get)
//         return true
//     }
// }

// function filterProgramerByFreeTime(tiempo_libre) {
//     alert("En la consola estan los resultados")
//     const result_get = programadores_a_contratar.filter(programer => Boolean(programer.tiempo_libre) === Boolean(tiempo_libre))
//     if (result_get === null) {
//         console.log("No se encontraron resultados coincidentes")
//         return false
//     } else {
//         console.log("Estos son los resultados encontrados:\n")
//         displayListOfProgramers(result_get)
//         return true
//     }
// }

// Aqui empiezan las funciones referidas con el LOCAL STORAGE


// function




// function check_local_storage() {
//     if (localStorage.getItem('programadores') === null) {
//         localStorage.setItem('programadores', JSON.stringify([]))
//     }
// }

function clear_local_storage() {
    localStorage.setItem(key_of_programers, JSON.stringify([]))
    // changes es un objeto que basicamente representa la ruta de cambios echos
    localStorage.setItem(key_of_changes, JSON.stringify({}))
}

function load_changes_and_programers(){
    
}

// function pushear_programadores_guardados() {
//     let programadores_array = JSON.parse(localStorage.getItem('programadores'))
//     console.log(programadores_array)
//     programadores_array.forEach(programer => {
//         let new_programer = new Programador(
//             programer.nombre, programer.expeciencia_tiempo, programer.titulo, true
//         )
//         programadores_a_contratar.push(new_programer)
//     })
// }

// function get_programers_from_storage(){
//     JSON.parse( localStorage.getItem(key_of_programers) )
// }



/* Aqui empieza la ejecucion del programa */






load_programers_from_db()

display_programers_in_dom(programadores_a_contratar)

add_evet_listener_to_button_reload_programers()


// reload_programers()




