
let second_data = ""
let first_data = ""
let title_ = ""
let expirience_ = 0

function set_event_listener_to_input(){
    let first = document.querySelector("#first")
    let second = document.querySelector("#second")
    let title = document.querySelector("#title")
    let expirience = document.querySelector("#expirience")


    first.addEventListener("input", (e) => {
        first_data = e.target.value
        console.log(first_data)
    })
    second.addEventListener("input", (e) => {
        second_data = e.target.value
        console.log(second_data)
    })
    title.addEventListener("input", (e) => {
        title_ = e.target.value
        console.log(title_)
    })
    expirience.addEventListener("input", (e) => {
        expirience_ = e.target.value
        console.log(expirience_)
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
        first_data + " " + second_data, expirience_, title_, true 
    )
    console.log(programador_registrado)
    debugger
    
    save_programers(programador_registrado)

    notify("Programador Registrado con exito!")
    debugger
}

function save_programers(objeto){
    let data = get_somthing_from_local_storage('changes')
    data['new_programers'].push(objeto)
    localStorage.setItem('changes', JSON.stringify(data))
}

// Ejecucion:

set_event_listener_to_input()
add_event_to_submit_button()