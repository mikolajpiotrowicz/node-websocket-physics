class Client  {
    constructor(connection) {
        this.connection = connection;
    }
    sendMessage(message) {
        const parsedMessage = JSON.stringify(message)
        this.connection.sendUTF(parsedMessage);
    }
}

module.exports = Client;