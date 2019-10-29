import { navigate } from '@reach/router';
import { Button, message, Modal } from 'antd';
import { useState } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import { createTask } from '../../../../public/services/task';
import { IUser } from '../../../../public/Interfaces/user/user';
import { ITask } from '../../../../public/Interfaces/tasks';

interface IHeaderProject {
    project: any;
    user: IUser
}

const HeaderProject = ({project, user}:IHeaderProject) => {
    const [modalProject, isModalProject] = useState<boolean>(false);
    const [data, setData] = useState<ITask>();
    const [isLoading, setLoading] = useState<boolean>(false);

    const onChangeData = (e: any) => {
        const { value, name } = e.currentTarget;
        setData({ ...data, [name]: value });
    };

    const openModal = () => {
        isModalProject(true);
    };

    const submit = async () => {
        setLoading(true);
        let task: ITask  = {
            name: data.name,
            user_id: user._id
        };
        try {
            setLoading(false);
            isModalProject(false);
            const res = await createTask(project._id, task);
            message.success(res.data.res);
        } catch (e) {
            setLoading(false);
            message.error('sorry')
        }
    };


    const goBack = () => {
        navigate('/projects');
    };


    return (
        <div className='project-header'>
            <Button type='primary' onClick={goBack}>Go Back</Button>
            <Button type='primary' onClick={openModal}>Create Task</Button>
            <Modal
                title='Create Task'
                visible={modalProject}
                onOk={submit}
                onCancel={()=> isModalProject(false)}
                confirmLoading={isLoading}
            >
                <div className='form-group'>
                    <input type='text' placeholder='Task Name' name='name' onChange={onChangeData}/>
                </div>
            </Modal>
            <h2>Project Name: {project.name}</h2>
        </div>
    );
}

export default connect(
    (state: any) => ({
        user: state.user
    }),
    dispatch => ({})
)(HeaderProject);
