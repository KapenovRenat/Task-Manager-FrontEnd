import { Router } from '@reach/router';
import * as React from 'react';
import MainComponent from './public/components/main';
import RegistrationPage from './pages/registration';
import './configurations/api.interseptor';
import './app.scss';

const App = () => {
    return(
        <div className='app'>
            <Router>
                <RegistrationPage path='/'/>
                <RegistrationPage path='/signUp'/>
            </Router>
        </div>
    )
}

export default App;

