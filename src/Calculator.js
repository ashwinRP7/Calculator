import React from 'react';
import logo from './logo.svg';
import './calculator.css';
import ClearButton from './ClearButton'
import Key from './Key'

import AnswerDiv from './AnswerDiv';

class Calculator extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            displayValue:0,
            oldOperand : 0,
            operator:""
        }
    }

    calculateResult(){
        let answer = 0;
        switch(this.state.operator){
            case "+":{
                answer = this.state.oldOperand + this.state.displayValue;
                
                break;
            }
            case "-":{
                answer = this.state.oldOperand - this.state.displayValue;
                
                break;
            }
            case "*":{
                answer = this.state.oldOperand * this.state.displayValue;
                
                break;
            }
            case "/":{
                answer = this.state.oldOperand / this.state.displayValue;
                
                break;
            }
        }
        if(answer == Infinity || answer == -Infinity){
            this.setState({displayValue:"Unknown"})
        }
        else{
            this.setState({displayValue:answer})
        }
    }

    changeDisplay(inputValue){
        this.setState({
            displayValue:Number.parseInt(this.state.displayValue + inputValue)
        })
    }

    add(){
        this.setState({
            operator:"+",
            oldOperand : this.state.displayValue,
            displayValue:0
        })
    }

    subtract(){
        this.setState({
            operator:"-",
            oldOperand : this.state.displayValue,
            displayValue:0
        })
    }

    multiply(){
        this.setState({
            operator:"*",
            oldOperand : this.state.displayValue,
            displayValue:0
        })
    }

    divide(){
        this.setState({
            operator:"/",
            oldOperand : this.state.displayValue,
            displayValue:0
        })
    }

    clearDisplay(){
        this.setState({
            displayValue:0
        })
    }


    render(){
        return (
            <div className="calculatorBox">
              <AnswerDiv obj={this.state.displayValue}></AnswerDiv>
                  
              <div className="keys">
                      <ClearButton obj = {()=> this.clearDisplay()}></ClearButton>
                      <div className="row1">
                            <Key obj={()=> this.changeDisplay("1")} num="1"></Key>
                            <Key obj={()=> this.changeDisplay("2")} num="2"></Key>
                            <Key obj={()=> this.changeDisplay("3")} num="3"></Key>
                            <Key obj={()=> this.add()} num="+"></Key>                                                                 
                      </div>
                      <div className="row2">
                          <Key obj={()=> this.changeDisplay("4")} num="4"></Key>
                          <Key obj={()=> this.changeDisplay("5")} num="5"></Key>
                          <Key obj={()=> this.changeDisplay("6")} num="6"></Key>
                          <Key obj={()=> this.subtract()} num="-"></Key>                          
                      </div>
                      <div className="row3">
                          <Key obj={()=> this.changeDisplay("7")} num="7"></Key>
                          <Key obj={()=> this.changeDisplay("8")} num="8"></Key>
                          <Key obj={()=> this.changeDisplay("9")} num="9"></Key>
                          <Key obj={()=> this.multiply()} num="*"></Key>                          
                      </div>
                      <div className="row4">
                          <button name=".">.</button>
                          <Key obj={()=> this.changeDisplay("0")} num="0"></Key>
                          <Key obj={()=> this.calculateResult()} num="="></Key>
                          <Key obj={()=> this.divide()} num="/"></Key>
                      </div>
                </div>
            </div>
          );    
    }
    
  }



export default Calculator;
