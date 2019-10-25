import { Card, Empty, Spin } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import { IProject } from '../../../../public/Interfaces/projects';

interface InterfaceProjectItems {
    projects: IProject[];
    isLoading: boolean;
}

const ProjectItemsComponent = ({projects, isLoading}:InterfaceProjectItems) => {

    if (isLoading) {
        return (<Spin size="large" />)
    } else {
        return (
            <div className='projects-items'>
                {
                    !projects.length ? <Empty /> :
                        projects.map((item: IProject) =>
                            <Card style={{ width: 300 }} key={item._id}>
                                <p>Name: {item.name}</p>
                                <p>Author: {(item.author as any).name}</p>
                            </Card>
                        )
                }
            </div>
        );
    }
};

export default connect(
    (state: any) => ({
        projects: state.projects.projectsItem,
        isLoading: state.projectIsLoading
    }),
    (dispatch: any) => ({
    })
)(ProjectItemsComponent);
