import React from 'react';
import logo from './logo.svg';

class ClearButton extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="clearKey">
                <button onClick={this.props.obj} name="c">Clear</button>
            </div>           
        );
    }

}

export default ClearButton;