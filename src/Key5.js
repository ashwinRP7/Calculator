import React from 'react';
import logo from './logo.svg';

class Key5 extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button onClick={this.props.obj} name="5">5</button>
        );
    }

}

export default Key5;