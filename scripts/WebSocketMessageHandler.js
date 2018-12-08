const MESSAGE_TYPES = {
    MOVE_UP: 'MOVE_UP',
    MOVE_DOWN: 'MOVE_DOWN',
    MOVE_LEFT: 'MOVE_LEFT',
    MOVE_RIGHT: 'MOVE_RIGHT',
};

class WebSocketMessageHandler {
    static handleMessage(message) {
        switch (message.type) {
            case MESSAGE_TYPES.MOVE_UP: {
                console.log('Gracz skrecil w gore   ');
                break;
            }
            case MESSAGE_TYPES.MOVE_DOWN: {
                console.log('Gracz skrecil w dol');
                break;
            }
            case MESSAGE_TYPES.MOVE_LEFT: {
                console.log('Gracz skrecil w lewo');
                break;
            }
            case MESSAGE_TYPES.MOVE_RIGHT: {
                console.log('Gracz skrecil w prawo');
                break;
            }
            default: {
                console.log('Inna akcja', message);
                break;
            }

        }
    }
}

module.exports = WebSocketMessageHandler;