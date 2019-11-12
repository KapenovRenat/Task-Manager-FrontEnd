import * as React from 'react';
import { useGetMessages } from '../../../../websocket';
import MessageItem from '../../../../pages/project/components/message-item';

const MessageWindow = () => {
    const [messages, typing] = useGetMessages();
    return (
        <div className="messages-window">
            {
                messages.map((item: any, index: number) =>
                    <MessageItem message = {item} key = {index}/>
                )
            }
            {(typing as any).typing.email && <p className='messages-window-typing'>{(typing as any).typing.email} is typing</p>}
        </div>
    );
}

export default MessageWindow;
