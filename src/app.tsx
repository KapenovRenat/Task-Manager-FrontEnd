import { Router } from '@reach/router';
import * as React from 'react';
import './configurations/api.interseptor';
import './app.scss';
import RegistrationPage from './pages/registration';

const App = () => {

    return(
        <Router>
            <RegistrationPage path='/signUp'/>
        </Router>
    )
}

export default App;

