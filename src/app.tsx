import { Router } from '@reach/router';
import * as React from 'react';
import ProjectPage from './pages/project';
import MainPage from './pages/main';
import ProjectsPage from './pages/projects';
import LoginPage from './pages/authorization/login';
import MainComponent from './public/components/main';
import RegistrationPage from './pages/authorization/registration';
import './configurations/api.interseptor';
import 'antd/dist/antd.css';
import './app.scss';

const App = () => {
    return(
        <div className='app'>
            <Router>
                <MainComponent path='/'>
                    <MainPage path='/'/>
                    <ProjectsPage path='/projects' />
                    <ProjectPage path='/project/:id' />
                </MainComponent>
                <LoginPage path='/signIn'/>
                <RegistrationPage path='/signUp'/>
            </Router>
        </div>
    )
}

export default App;

