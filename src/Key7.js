import React from 'react';
import logo from './logo.svg';

class Key7 extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button onClick={this.props.obj} name="7">7</button>
        );
    }

}

export default Key7;