import React, { Component } from 'react';
import {Input, Button, Row} from 'react-materialize'

class Form extends Component {

  constructor(props){
    super(props);
    this.state={
      inputValue:""
    };
  }

  getResetValue = ()=>{
    this.state={
      inputValue:""
    };
  }

  state = {
    inputValue:""
  }

  addToDoListHandler =()=>{
    if(this.state.inputValue ==""){
      return;
    }
    console.log(this.state.inputValue);
    this.props.addToDoListHandler();
    this.setState({inputValue:""})
  }

  onChangeInput = (e) =>{
    this.setState({inputValue:e.currentTarget.value});
  }

  render() {
    return (
      <div>
          <Row >
              <Input m={4} s={12} label="Add to do" id="input" type="text" value={this.state.inputValue} onChange={this.onChangeInput}/>
          </Row>
          <Row>
            <Button onClick={this.addToDoListHandler}>Add</Button>
          </Row>
      </div>
    );
  }
}

export default Form;
