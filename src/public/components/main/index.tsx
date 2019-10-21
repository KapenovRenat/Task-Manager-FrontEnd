import { Router } from '@reach/router';
import * as React from 'react';

const ShowComponent = ({path}: any) => {
    return (
        <div>
            hello
        </div>
    )
};

const MainComponent = ({path}: any) => {
    return (
        <div className='container'>
            <Router>
                <ShowComponent path='/'/>
            </Router>
        </div>
    );
};

export default MainComponent;
