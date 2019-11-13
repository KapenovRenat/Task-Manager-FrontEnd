import { useEffect, useState } from 'react';

interface DataMessage {
    message?: string;
    email?: string;
    project_id?: string,
    type?: number;
}

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

const useGetMessages = (): [DataMessage[], {}]  => {
    let [messages, setMessages] = useState<DataMessage[]>([]);
    let [typing, setTyping] = useState<DataMessage>({});

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
