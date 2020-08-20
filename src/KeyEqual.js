import React from 'react';
import logo from './logo.svg';

class KeyEqual extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button onClick={ this.props.obj } name="=">=</button>
        );
    }

}

export default KeyEqual;