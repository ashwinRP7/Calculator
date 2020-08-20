import React from 'react';
import logo from './logo.svg';

class Key9 extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button onClick={this.props.obj} name="9">9</button>
        );
    }

}

export default Key9;