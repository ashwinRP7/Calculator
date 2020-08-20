import React from 'react';
import logo from './logo.svg';

class AnswerDiv extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="displayAnswer">
                {this.props.obj}
            </div>
        );
    }

}

export default AnswerDiv;