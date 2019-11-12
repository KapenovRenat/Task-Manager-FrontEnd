import { useEffect, useState } from 'react';

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

const useGetMessages = () => {
    let [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.onmessage = function(event: any) {
            let message = JSON.parse(event.data);
            setMessages([...messages, message]);
        };
    }, []);

    return [messages];
};

export {
    connectSocket,
    closeSocket,
    sendMessage,
    useGetMessages
}
