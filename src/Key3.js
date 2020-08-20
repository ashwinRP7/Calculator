import React from 'react';
import logo from './logo.svg';

class Key3 extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button onClick={this.props.obj} name="3">3</button>
        );
    }

}

export default Key3;