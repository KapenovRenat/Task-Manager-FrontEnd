import * as React from 'react';
import { useGetMessages } from '../../../../websocket';
import MessageItem from '../../../../pages/project/components/message-item';

const MessageWindow = () => {
    const [messages] = useGetMessages();

    return (
        <div className="messages-window">
            {console.log(messages)}
            {
                messages && messages.map((item: any, index: number) => {
                    <MessageItem message = {item} key = {index}/>
                })
            }
        </div>
    );
}

export default MessageWindow;
