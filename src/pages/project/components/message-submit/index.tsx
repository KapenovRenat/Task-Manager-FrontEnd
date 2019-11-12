import { Button, Input } from 'antd';
import { useContext, useState } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import { ProjectPageContext } from '../../../../pages/project/index';
import { IUser } from '../../../../public/Interfaces/user/user';
import { sendMessage } from '../../../../websocket';

interface ISubmit {
    user: IUser
}

const MessageSubmit = ({user}: ISubmit) => {
    const projectPageContext: any = useContext(ProjectPageContext);
    const [message, setMessage] = useState<string>();

    const submit = (e: any) => {
        e.preventDefault();
        if (message){
           let { email } = user;
           let body:string = JSON.stringify({
               message,
               email,
               project_id: projectPageContext.project_id
           });
           sendMessage(body);
        }
    };

    const onChangeText = (e: any) => {
        setMessage(e.target.value);
    };

    return (
        <div className="messages-submit">
            <form onSubmit={submit}>
                <Input size="large" placeholder="Send Message" onChange={onChangeText} />
                <Button size="large" type="primary" htmlType='submit'>Send</Button>
            </form>
        </div>
    );
}

export default connect(
    (state: any) => ({
        user: state.user
    }),
    dispatch => ({})
)(MessageSubmit);
