import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';

export default class Product extends Component {
    render() {
        const item = this.props.item;
        
        if(!item) {
            return(<div></div>);
        }
        
        if (this.props.isBasketItem) {
            return(
                <div className="basketItem">
                    {item.product}
                </div>
            );
        }
        
        return (
            <div className="productItem">
                <Checkbox
                    onCheck={(event, isInputChecked) => {
                        this.props.onCheck(event, isInputChecked, item)
                    }}
                    label={item.product}/>
            </div>
        );
    }
}