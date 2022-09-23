function add_notification(message) {
    const parent_div = document.createElement('div')
    parent_div.classList = 'notification d-flex flex-column bg-warning'

    console.log(parent_div)

    const cross_div = document.createElement('div')
    cross_div.classList = 'm-0 text-end'

    const x = document.createElement('span')
    x.classList = 'col-12 m-1'
    x.id = 'x_of_notification'
    x.innerText = "X"

    console.log(x)

    const message_div = document.createElement('div')
    message_div.classList = 'mx-3'

    const message_p = document.createElement('p')
    message_p.classList = 'text-center text-black'
    message_p.innerText = message

    message_div.appendChild(message_p)
    cross_div.appendChild(x)

    parent_div.append(cross_div, message_div)

    // const body = document.querySelector(".body")
    const body = document.body
    body.appendChild(parent_div)


}

function delete_notification() {
    let notification = document.querySelector(".notification")
    if (notification) {
        notification.parentNode.removeChild(notification)
    }
}


function add_event_to_close_notification() {
    let x_button = document.querySelector("#x_of_notification")
    x_button.addEventListener('click', () => { delete_notification() })
}

function notify(message) {
    delete_notification()
    add_notification(message)
    add_event_to_close_notification()
}
