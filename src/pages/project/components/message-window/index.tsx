import * as React from 'react';
import MessageItem from '../../../../pages/project/components/message-item';

const MessageWindow = () => {
    return (
        <div className="messages-window">
            <MessageItem/>
            <MessageItem/>
            <MessageItem/>
            <MessageItem/>
            <MessageItem/>
        </div>
    );
}

export default MessageWindow;
