import React from 'react';
import logo from './logo.svg';

class Key8 extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button onClick={this.props.obj} name="8">8</button>
        );
    }

}

export default Key8;