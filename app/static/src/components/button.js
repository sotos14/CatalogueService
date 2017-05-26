import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class Button extends Component {
    render(){
        return(
            <div className='app-button'>
                <RaisedButton
                    label={this.props.text}
                    primary={this.props.isPrimary || false}
                    disabled={this.props.isDisabled || false}
                    onTouchTap={this.props.onPress}
                />
            </div>
        );
    }
} 

