import React, { Component } from 'react';
import USER_COOKIE from '../consts';
import AppBar from 'material-ui/AppBar';

export default class Confirmation extends Component {
    render(){
        const userId = localStorage.getItem(USER_COOKIE);
        const items = this.props.location.query.items;
        return(
            <div className="confirmation">
                <AppBar showMenuIconButton={false} />
                <div className="confirmation-details">
                    <h4 className="confirmation-title">
                        Checkout Confirmation (user id: {userId})
                    </h4>
                    <p>Items selected: </p>
                    <ul className="confirmation-items">
                    {
                        Array.isArray(items) ?
                            items.map((item) => {
                                return (<li key={item}>{item}</li>)
                            }) : items
                    }
                    </ul>
                </div>
                <AppBar showMenuIconButton={false} />
            </div>
        );
    }
}