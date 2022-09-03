alert("En esta pagina vas a poder contratar programadores")

let programa_prendido = true

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
    }


    const programador1 = new Programador("Gustavo", 2, "Front End Developer", true)
    const programador2 = new Programador("Juan", 5, "Data Analytics", true)
    const programador3 = new Programador("Pepe", 1, "Game Development", false)


while (programa_prendido) {

    if (!(programador1.tiempo_libre && programador2.tiempo_libre && programador3.tiempo_libre)){
        alert("Todos los programadores han sido contratados, el programa se cerrará")
        programa_prendido = false
        break
    }

    const programador_numero = prompt(`Selecione el programador que quiera contratar\n1.${programador1.nombre} titulo: ${programador1.titulo}\n2.${programador2.nombre} titulo: ${programador2.titulo}\n3.${programador3.nombre} titulo: ${programador3.titulo}`)
    let programador = programador1

    function select_programer() {
        switch (programador_numero) {
            case "1":
                programador = programador1
                break
            case "2":
                programador = programador2
                break
            case "3":
                programador = programador3
                break
            default:
                programador = programador1
                break
        }
    }

    select_programer()

    programador.contratar()

    const terminar_programa = prompt("Contratar otro Programador?(S/N)").toUpperCase

    if (terminar_programa.startsWith("N")) {
        programa_prendido = false
    }
}