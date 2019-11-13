import { useContext, useEffect } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import { ProjectPageContext } from '../../../../pages/project/index';
import { fetchDataMessage, messageAddDataSuccess } from '../../../../store/actions/messages';
import { getMessages } from '../../../../websocket';
import MessageItem from '../../../../pages/project/components/message-item';

const MessageWindow = ({getMessage, msg, saveMSG}: any) => {
    const projectPageContext: any = useContext(ProjectPageContext);

    useEffect(() => {
        getMessage(projectPageContext.project_id);
        getMessages(saveMSG)
    }, []);

    return (
        <div className="messages-window">
            {
                msg.map((item: any, index: number) =>
                    <MessageItem message = {item} key = {index}/>
                )
            }
        </div>
    );
}

export default connect(
    (state: any) => ({
        msg: state.messages
    }),
    dispatch => ({
        getMessage: (id: string) => dispatch(fetchDataMessage(id)),
        saveMSG: (data: any) => dispatch(messageAddDataSuccess(data))
    })
)(MessageWindow);
