let socket = io();

socket.on('connect', () => {
    console.log('Conectado al servidor...');
})

socket.on('disconnect', () => {
    console.log('Se perdió la conexión al servidor...');
})


socket.on('estadoActual', (data) => {

    $('#lblTicket1').text(data.ultimos4[0].numero);
    $('#lblTicket2').text(data.ultimos4[1].numero);
    $('#lblTicket3').text(data.ultimos4[2].numero);
    $('#lblTicket4').text(data.ultimos4[3].numero);

    $('#lblEscritorio1').text(`Escritorio ${ data.ultimos4[0].escritorio }`);
    $('#lblEscritorio2').text(`Escritorio ${ data.ultimos4[1].escritorio }`);
    $('#lblEscritorio3').text(`Escritorio ${ data.ultimos4[2].escritorio }`);
    $('#lblEscritorio4').text(`Escritorio ${ data.ultimos4[3].escritorio }`);

})