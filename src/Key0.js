import React from 'react';
import logo from './logo.svg';

class Key0 extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button onClick={this.props.obj} name="0">0</button>
        );
    }

}

export default Key0;