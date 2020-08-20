import React from 'react';
import logo from './logo.svg';
import './calculator.css';
import ClearButton from './ClearButton'
import Key0 from './Key0'
import Key1 from './Key1'
import Key2 from './Key2'
import Key3 from './Key3'
import Key4 from './Key4'
import Key5 from './Key5'
import Key6 from './Key6'
import Key7 from './Key7'
import Key8 from './Key8'
import Key9 from './Key9'
import KeyMul from './KeyMul'
import KeySub from './KeySub'
import KeyAdd from './KeyAdd'
import KeyEqual from './KeyEqual'
import KeyDivide from './KeyDivide'
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
                            <Key1 obj={()=> this.changeDisplay("1")}></Key1>
                            <Key2 obj={()=> this.changeDisplay("2")}></Key2>
                            <Key3 obj={()=> this.changeDisplay("3")}></Key3>
                            <KeyAdd obj={()=> this.add()}></KeyAdd>                                                        
                      </div>
                      <div className="row2">
                          <Key4 obj={()=> this.changeDisplay("4")}></Key4>
                          <Key5 obj={()=> this.changeDisplay("5")}></Key5>
                          <Key6 obj={()=> this.changeDisplay("6")}></Key6>
                          <KeySub obj={()=> this.subtract()}></KeySub>                          
                      </div>
                      <div className="row3">
                          <Key7 obj={()=> this.changeDisplay("7")}></Key7>
                          <Key8 obj={()=> this.changeDisplay("8")}></Key8>
                          <Key9 obj={()=> this.changeDisplay("9")}></Key9>
                          <KeyMul obj={()=> this.multiply()}></KeyMul>                          
                      </div>
                      <div className="row4">
                          <button name=".">.</button>
                          <Key0 obj={()=> this.changeDisplay("0")}></Key0>
                          <KeyEqual obj={()=> this.calculateResult()}></KeyEqual>
                          <KeyDivide obj={()=> this.divide()}></KeyDivide>
                      </div>
                </div>
            </div>
          );    
    }
    
  }



export default Calculator;
