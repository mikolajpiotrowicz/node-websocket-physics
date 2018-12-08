const Client = require('./Client.js');

class ClientList {
    constructor(){
        this.clients = [];
    }
    createClient(connection) {
        const client = new Client(connection);
        this.clients.push(client);
    }
    removeClient(connection){
        this.clients = this.clients.filter((client) => client.connection.id !== connection.id);
    }
    sendMessageToAll(message) {
        const clientsQuantity = this.clients.length;
        if(clientsQuantity > 0) {
            for (let i = 0; i < clientsQuantity; i++) {
                this.clients[i].sendMessage(message);
            }
        }
    }
}

const clientList = new ClientList();
module.exports = clientList;