// TICKET
const addTicket = document.getElementById('add-ticket')
const removeTicket = document.getElementById('remove-ticket')
const ticket = document.getElementById('ticket-number')
const ticketPrice = document.getElementById('ticket-price')
const ticketPricePeople = document.getElementById('ticket-price-people')
const ticketValue = 90

addTicket.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('Add Ticket')
    ticket.innerText = parseInt(ticket.innerText) +1
    ticketPrice.innerText = parseInt (ticketPrice.innerText) + ticketValue
    ticketPricePeople.innerText = 'Total'
})


removeTicket.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('Remove Ticket')
    if (parseInt(ticket.innerText) > 1){
        ticket.innerText = parseInt (ticket.innerText) -1
        ticketPrice.innerText = parseInt (ticketPrice.innerText) - ticketValue
        if (parseInt(ticket.innerText) == 1){
            ticketPricePeople.innerText = 'por pessoa'
        }
    }
})



// FORMULARIO
const cartForm = document.getElementById('cart-form')
const buyButton = document.getElementById('buy-button')

cartForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = cartForm.nome.value
    const email = cartForm.email.value
    const quantityTicket = ticket.innerText

    window.localStorage.setItem('name', name)
    window.localStorage.setItem('email', email)
    window.localStorage.setItem('quantityTicket', quantityTicket)
    window.location.href = 'finalizacao.html'

    console.log('Nome: ', nome)
    console.log('Email: ', email)
    console.log('Tickets: ', ticket.innerText)
})


























//  CODE  BY GHABRIEL MOLINA 
//  LINKEDIN 
// https://www.linkedin.com/in/ghabriel-molina/ 