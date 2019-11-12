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

const useGetMessages = (): [any[], {}]  => {
    let [messages, setMessages] = useState([]);
    let [typing, setTyping] = useState({});

    useEffect(() => {
        socket.onmessage = function(event: any) {
            let message = JSON.parse(event.data);
            if (message.type === 1) {
                setMessages([...messages, message]);
                setTyping({})
            } else {
                setTyping(message)
            }
        };
    }, [messages]);

    return [messages, typing];
};

export {
    connectSocket,
    closeSocket,
    sendMessage,
    useGetMessages
}
