import { Button, Input } from 'antd';
import * as React from 'react';
import './style.scss';

const MessageContainer = () => {
    return (
        <div className='messages'>
            <div className="messages-window">
                <div className="messages-window-item">
                    <h3>Name :</h3>
                    <p>text asdasdasdsad</p>
                </div>
                <div className="messages-window-item">
                    <h3>Name :</h3>
                    <p>text asdasdasdsad</p>
                </div>
                <div className="messages-window-item">
                    <h3>Name :</h3>
                    <p>text asdasdasdsad asdad asda dasd asdasdasdasd asd asdasd asd Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eveniet incidunt mollitia non quas repellendus sed ullam vel? Architecto cumque delectus distinctio modi perspiciatis placeat provident quae quibusdam quo voluptatum? Ad adipisci amet at consectetur corporis delectus esse et ex exercitationem facilis incidunt iusto nam natus quasi reiciendis unde, voluptatum?</p>
                </div>
            </div>
            <div className="messages-submit">
                <Input size="large" placeholder="large size" />
                <Button size="large" type="primary">Send</Button>
            </div>
        </div>
    );
}

export default MessageContainer;
