import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


export default class App extends Component {
    
    render() {
        
        return (
            <MuiThemeProvider>
                <div>
                  {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}
