import { Button, Input } from 'antd';
import * as React from 'react';

const MessageSubmit = () => {
    return (
        <div className="messages-submit">
            <Input size="large" placeholder="Send Message" />
            <Button size="large" type="primary">Send</Button>
        </div>
    );
}

export default MessageSubmit;
