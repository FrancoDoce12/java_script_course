
let second_data = ""
let first_data = ""
let title = ""
let expirience = 0

function set_event_listener_to_input(){
    let first = document.querySelector("#first")
    let second = document.querySelector("#second")
    let title = document.querySelector("#title")
    let expirience = document.querySelector("#expirience")


    first.addEventListener("input", (e) => {
        first_data = e.target.value
    })
    second.addEventListener("input", (e) => {
        second_data = e.target.value
    })
    title.addEventListener("input", (e) => {
        title = e.target.value
    })
    expirience.addEventListener("input", (e) => {
        console.log(e.target.value)
        expirience = e.target.value
    })
}

function add_event_to_submit_button(){
    let button = document.querySelector("#submit")
    button.addEventListener("click", () =>{
        send_info()
    }) 
}

function send_info(){
    let programador_registrado = new Programador(
        first_data + second_data, expirience, title, true 
    )
    console.log(programador_registrado)
    let programadores_guardados = JSON.parse(localStorage.getItem('programadores'))
    programadores_guardados.push(programador_registrado)
    localStorage.setItem('programadores',JSON.stringify(programadores_guardados))
}

// Ejecucion:

set_event_listener_to_input()
add_event_to_submit_button()