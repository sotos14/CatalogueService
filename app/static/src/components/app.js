import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ProductsView from '../containers/products-view';

export default class App extends Component {
    
    render() {
        // Needed for onTouchTap
        // http://stackoverflow.com/a/34015469/988941
        injectTapEventPlugin();
        
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar showMenuIconButton={false} />
                    <div>
                        <ProductsView/>
                    </div>
                    <AppBar showMenuIconButton={false} />
                </div>
            </MuiThemeProvider>
        );
    }
}
