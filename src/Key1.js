import React from 'react';
import logo from './logo.svg';

class Key1 extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button onClick={this.props.obj} name="1">1</button>
        );
    }

}

export default Key1;