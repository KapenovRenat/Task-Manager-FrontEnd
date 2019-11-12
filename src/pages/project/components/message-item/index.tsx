import * as React from 'react';

const MessageItem = ({message}: any) => {
    return (
        <div className="messages-window-item">
            <h3>{message.email} :</h3>
            <p>{message.message}</p>
        </div>
    );
}

export default MessageItem;
