import { Button, message, Modal } from 'antd';
import { useState } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import { projectsFetchData } from '../../../../store/actions/project';
import { createProject } from '../../../../public/services/project';
import { IProject } from '../../../../public/Interfaces/projects';

interface IProjectActions {
    hasLoading: boolean;
    getProjects: () => void;
}

const ProjectActionsComponent = ({hasLoading, getProjects}: IProjectActions) => {
    const [modalProject, isModalProject] = useState<boolean>(false);
    const [data, setData] = useState<IProject>();
    const [isLoading, setLoading] = useState<boolean>(false);

    const onChangeData = (e: any) => {
        const { value, name } = e.currentTarget;
        setData({ ...data, [name]: value });
    };

    const submit = async () => {
        setLoading(true);
        try {
            const res = await createProject(data);
            setLoading(false);
            getProjects();
            isModalProject(false);
            message.success(res.data.res);
        } catch (e) {
            setLoading(false);
            message.error(e.response.data.res)
        }
    };

    return (
        <div className='projects-actions'>
            <Button type='primary' onClick={()=> isModalProject(true)}>New Project</Button>
            <Modal
                title='Create Project'
                visible={modalProject}
                onOk={submit}
                onCancel={()=> isModalProject(false)}
                confirmLoading={isLoading}
            >
                <div className="form-group">
                    <input type="text" placeholder='Project name' name='name' onChange={onChangeData}/>
                </div>
            </Modal>
        </div>
    );
};

export default connect(
    (state: any) => ({
        hasError: state.projectHasErrored,
        hasLoading: state.projectIsLoading
    }),
    (dispatch: any) => ({
        getProjects: () => dispatch(projectsFetchData())
    })
)(ProjectActionsComponent);
