let socket = io();

let label = $('#lblNuevoTicket');

socket.on('connect', () => {
    console.log('Conectado al servidor...');
})

socket.on('disconnect', () => {
    console.log('Se perdió la conexión al servidor...');
})

socket.on('estadoActual', (mensaje) => {
    label.text(mensaje.actual);
})

$('button').on('click', () => {
    socket.emit('siguienteTicket', null, (siguiente) => {
        label.text(siguiente);
    });
});