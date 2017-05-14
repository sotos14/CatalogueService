import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Index from './components/products-index';
import Confirmation from './components/confirmation';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="confirm" name='confirm'>
          <IndexRoute component={Confirmation}/>
        </Route>
    </Route>
);