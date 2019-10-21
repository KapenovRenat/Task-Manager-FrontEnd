import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import Store from './store';

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('app'));
