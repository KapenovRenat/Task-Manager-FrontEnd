import MessageContainer from '@pages/project/components/messager';
import { Spin } from 'antd';
import { useEffect } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import DragDropContexComponent from '../../pages/project/components/DragDropContext';
import { projectFetchData } from '../../store/actions/project';
import HeaderProject from './components/header';

const ProjectPage = ({ path, getProjectData, id, project, isLoading }: any) => {

    useEffect(() => {
        getProjectData(id);
    }, []);

    if (isLoading) {
        return (
            <div className='spin-block'>
                <Spin size='large' />
            </div>
        )
    } else {
        return (
            <div className='page project'>
                <HeaderProject project={project}/>
                <DragDropContexComponent project = {project}/>
                <MessageContainer />
            </div>
        );
    }
};

export default connect(
    (state: any) => ({
        isLoading: state.projectIsLoading,
        project: state.project.project
    }),
    dispatch => ({
        getProjectData: (id: string) => dispatch(projectFetchData(id)),
    })
)(ProjectPage);
