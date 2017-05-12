import React from 'react';
import {render} from 'react-dom';
import rootReducer from './reducers';
import App from './components/app';

render(<App />, document.getElementById('app'));