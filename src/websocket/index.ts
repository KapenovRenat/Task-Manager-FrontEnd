let socket: any;

const connectSocket = (id_project: string) => {
    socket = new WebSocket(`ws://localhost:3000?project=${id_project}`);
};

const closeSocket = () => {
    socket.close();
};


export {
    connectSocket,
    closeSocket
}
