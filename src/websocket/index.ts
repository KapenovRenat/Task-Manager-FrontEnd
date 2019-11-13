let socket: any;

const connectSocket = (id_project: string) => {
    socket = new WebSocket(`ws://localhost:3000?project=${id_project}`);
};

const closeSocket = () => {
    socket.close();
};

const sendMessage = (message: string) => {
    socket.send(message);
};

const getMessages = (saveMsg: any) => {
    socket.onmessage = function(event: any) {
        let message = JSON.parse(event.data);
        saveMsg([message]);
    };
};

export {
    connectSocket,
    closeSocket,
    sendMessage,
    getMessages
}
