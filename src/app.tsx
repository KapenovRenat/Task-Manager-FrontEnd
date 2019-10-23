import { Router } from '@reach/router';
import * as React from 'react';
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
                <LoginPage path='/'/>
                <RegistrationPage path='/signUp'/>
            </Router>
        </div>
    )
}

export default App;

