import React from 'react';
import logo from './logo.svg';

class Key2 extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button onClick={this.props.obj} name="2">2</button>
        );
    }

}

export default Key2;