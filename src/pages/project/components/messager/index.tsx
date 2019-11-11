import * as React from 'react';
import './style.scss';
import MessageWindow from '../../../../pages/project/components/message-window';
import MessageSubmit from '../../../../pages/project/components/message-submit';

const MessageContainer = () => {
    return (
        <div className='messages'>
            <MessageWindow />
            <MessageSubmit />
        </div>
    );
}

export default MessageContainer;
