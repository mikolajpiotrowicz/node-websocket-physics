class WebSocketMessageHandler {
    static handleMessage(message) {
        switch (message.type) {
            case 'ENTITIES_POSITION': {
                const { x, y } = message.payload;
                clearCanvas(context, canvas);
                drawCircle(x, y, 30, "#FFFFFF", 15);

                break;
            }
            default: {
                console.log(message.type, 'Typ nieznany');
            }
        }
    }
}


0