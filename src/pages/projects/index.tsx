import { useEffect } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import { projectsFetchData } from '../../store/actions/projects';
import ProjcetItemsComponent from '../../pages/projects/components/project-items';
import ProjectActionsComponent from '../../pages/projects/components/actions';
import MainHeader from '../../public/components/page-header';

import './styles.scss';

const ProjectsPage = ({path, getProjects}: any) => {

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <div className='page projects'>
            <MainHeader title={'Projects'}/>
            <ProjectActionsComponent />
            <ProjcetItemsComponent />
        </div>
    );
}

export default connect(
    (state: any) => ({}),
    (dispatch: any) => ({
        getProjects: () => dispatch(projectsFetchData())
    })
)(ProjectsPage);
