import { Spin } from 'antd';
import { useEffect } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import { closeSocket, connectSocket } from '../../websocket';
import MessageContainer from '../../pages/project/components/messager';
import DragDropContexComponent from '../../pages/project/components/DragDropContext';
import { projectFetchData } from '../../store/actions/project';
import HeaderProject from './components/header';

export const ProjectPageContext = React.createContext({});

const ProjectPage = ({ path, getProjectData, id, project, isLoading }: any) => {

    useEffect(() => {
        connectSocket(id);
        getProjectData(id);

        return () => {
            closeSocket()
        }
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
                <ProjectPageContext.Provider value = {{project_id: id}}>
                    <MessageContainer />
                </ProjectPageContext.Provider>
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
