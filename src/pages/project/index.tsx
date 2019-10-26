import { Spin } from 'antd';
import { useEffect } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import { projectClean, projectFetchData } from '../../store/actions/project';
import HeaderProject from './components/header';

const ProjectPage = ({ path, getProjectData, id, project, isLoading, cleaStore }: any) => {

    useEffect(() => {
        getProjectData(id);

        return () => {
            cleaStore();
        }
    }, []);


    if (isLoading) {
        return (<Spin size="large" />)
    } else {
        return (
            <div className='page project'>
                <HeaderProject name={project.name}/>
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
        cleaStore: () => dispatch(projectClean())
    })
)(ProjectPage);