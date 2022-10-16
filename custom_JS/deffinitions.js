
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
        this.tiempo_libre = 0
    }
    hacerDisponible() {
        this.tiempo_libre = 1
    }

    aTexto() {
        return `${this.nombre}:\nEs "${this.titulo}"\nTiene ${this.expeciencia_tiempo} Años de experiencia\n¿Disponible? ${Boolean(this.tiempo_libre)}`
    }
}



function get_somthing_from_local_storage(key){
    return JSON.parse(localStorage.getItem(key))
}