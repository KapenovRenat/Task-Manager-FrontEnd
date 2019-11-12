import * as React from 'react';
import { useGetMessages } from '../../../../websocket';
import MessageItem from '../../../../pages/project/components/message-item';

const MessageWindow = () => {
    const data = useGetMessages();
    return (
        <div className="messages-window">
            {
                data.messages.map((item: any, index: number) =>
                    <MessageItem message = {item} key = {index}/>
                )
            }
            {(data as any).typing.email && <p className='messages-window-typing'>{(data as any).typing.email} is typing</p>}
        </div>
    );
}

export default MessageWindow;
