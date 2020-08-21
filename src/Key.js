import React from 'react';
import logo from './logo.svg';

class Key extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button onClick={this.props.obj} name={this.props.num}>{this.props.num}</button>
        );
    }

}

export default Key;