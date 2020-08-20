import React from 'react';
import logo from './logo.svg';

class Key4 extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button onClick={this.props.obj} name="4">4</button>
        );
    }

}

export default Key4;