/* Este codigo es para hacer pruebas nada mas, no ira en el proyecto final*/

// const content_container_1 = document.querySelector(".content_1")
function create_element_basic_node(tag,clases){
    return document.createElement(`${tag}`).classList = clases
}

function create_element_basic_clases(tag){
    return create_element_basic_node(tag,['text-center', 'mt-1'])
}

let name = "jorge"
let title = "casfsa"
let expirience = 3
let disponible = true

const container = document.querySelector('.content_1')
const div = document.createElement('div')
div.classList = ['col', 'mr-4', 'bg-info', 'border', 'border-2', 'border-success', 'rounded-3', 'shadow_custom_black']

const h2_name = create_element_basic_clases('h2')
h2_name.textContent = name


const h3_title = create_element_basic_clases('h3')
h3_title.textContent = title

const h3_expirience = create_element_basic_clases('h3')
h3_expirience.textContent = expirience


const h3_disponible = create_element_basic_clases('h3')
h3_disponible.textContent = disponible

div.append(h2_name)
div.append(h3_title)
div.append(h3_expirience)
div.append(h3_disponible)

let container_content = document.querySelector(".content_1")
container_content.append(div)





