/* Este codigo es para hacer pruebas nada mas, no ira en el proyecto final*/


const clases_to_use = 'text-center mt-1 w-25' 

let namee = 'jorge'
let title = 'casfsa'
let expirience = 3
let disponible = true


const div = document.createElement('div')
div.classList = 'col mr-4 bg-info border border-2 border-success rounded-3 shadow_custom_black w-25'



const h2_name = document.createElement("h2")
h2_name.classList = clases_to_use
h2_name.textContent = namee



const h3_title = document.createElement('h3')
h3_title.classList = clases_to_use
h3_title.textContent = title

const h3_expirience = document.createElement('h3')
h3_expirience.classList = clases_to_use
h3_expirience.textContent = expirience


const h3_disponible = document.createElement('h3')
h3_disponible.classList = clases_to_use
h3_disponible.textContent = disponible

div.append(h2_name, h3_title ,h3_expirience ,h3_disponible)




let container_content = document.querySelector(".content_1")

container_content.append(div)






