const fs = require('fs');

class Ticket {

    constructor(numero, escritorio) {

        this.numero = numero;
        this.escritorio = escritorio;

    }

}

class TicketControl {

    constructor() {

        this.ultimo = 0;
        this.hoy = new Date().getDate();
        this.tickets = [];
        this.ultimos4 = [];

        let data = require('../data/data.json');

        if (this.hoy == data.hoy) {

            this.ultimo = data.ultimo;

        } else {

            this.reiniciarConteo();
            this.grabarData();

        }
    }

    siguiente() {

        this.ultimo++;
        let ticket = new Ticket(this.ultimo, null);
        this.tickets.push(ticket);
        this.grabarData();

        return `Ticket ${ this.ultimo }`;

    }

    getUltimoTicket() {

        return `Ticket ${ this.ultimo }`;

    }

    getUltimos4() {

        return this.ultimos4;

    }


    atenderTicket(escritorio) {

        console.log(this.tickets);
        if (this.tickets.length == 0) {
            return 'No hay tickets';
        }

        let numero = this.tickets[0].numero;
        this.tickets.shift();

        let ticketAtender = new Ticket(numero, escritorio);
        console.log(ticketAtender);
        this.ultimos4.unshift(ticketAtender);

        if (this.ultimos4.length > 4) {
            this.ultimos4.splice(-1, 1);
        }

        this.grabarData();

        return ticketAtender;

    }

    reiniciarConteo() {

        this.ultimo = 0;
        this.tickets = [];
        this.ultimos4 = [];
        this.grabarData();

    }

    grabarData() {

        let dataJSON = {
            ultimo: this.ultimo,
            hoy: this.hoy,
            tickets: this.tickets,
            ultimos4: this.ultimos4
        }

        let dataGrabar = JSON.stringify(dataJSON);

        fs.writeFileSync('./server/data/data.json', dataGrabar);

    }
}

module.exports = {
    TicketControl
}