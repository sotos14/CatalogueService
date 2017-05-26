// import React from 'react';
// import ReactDOM from 'react-dom';
// 
// import {
// 	renderIntoDocument,
// 	findRenderedDOMComponentWithClass,
// 	scryRenderedComponentsWithType,
//     findRenderedComponentWithType
// } from 'react-dom/test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Button from '../../src/components/button';


describe('Button', () =>{
    // const muiTheme = getMuiTheme();
    const shallowWithContext = (node) => shallow(node, {context: {MuiThemeProvider}});
    
    it('Should have the correct class', () => {
        const wrapper = shallow(<Button />);
        
        expect(wrapper.find('.app-button')).to.have.length(1);
    });
    
    it('Should render a Raised Button', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.find(RaisedButton)).to.have.length(1);
    });
    
    it('Should call the callback correctly', () => {
        const onPressSpy = spy();
        const wrapper = shallowWithContext(
                <Button onPress={onPressSpy}/>
        );
        
        wrapper.find(RaisedButton).simulate('touchTap');
        
        expect(onPressSpy).to.have.property('callCount', 1);
    });
});