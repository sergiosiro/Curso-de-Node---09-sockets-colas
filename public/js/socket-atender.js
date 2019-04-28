let socket = io();

let seachParams = new URLSearchParams(window.location.search);
if (!seachParams.has('escritorio')) {
    throw new Error('No se informa el escritorio');
}

let escritorio = seachParams.get('escritorio');

$('h1').text(`Escritorio ${ escritorio } `);

socket.on('connect', () => {
    console.log('Conectado al servidor...');
})

socket.on('disconnect', () => {
    console.log('Se perdió la conexión al servidor...');
})


$('button').on('click', () => {
    socket.emit('atenderTicket', { escritorio }, (resp) => {
        if (resp.err) {
            alert(resp.mensaje);
        } else {
            $('small').text(`ticket nro ${ resp.numero }`);
        }
    });
});