import React from 'react';
import logo from './logo.svg';

class Key6 extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button onClick={this.props.obj} name="6">6</button>
        );
    }

}

export default Key6;