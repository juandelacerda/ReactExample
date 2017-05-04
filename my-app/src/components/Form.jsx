import React, { Component } from 'react';
import { Input ,Button,Row   } from 'react-materialize';

class Form extends React.Component {

  state={
    name:""
  }
  constructor(props) {
    super(props);
  }
  getInitialState(){
    this.setState({name:""})
  }
  onSubmit(){
    this.state.name=this.refs.username.state.value;
    this.props.addToDoHandler();
    this.refs.username.setState({defaultValue:"sa"})
    console.log(this.refs.username.state.value);
  }

  render(){
    return(
      <div>
        <Row>
          <Input type="text" s={12} m={6} label="Add to do" ref="username"/>
        </Row>
        <Button s={12} m={6} className="center" onClick={(e)=>this.onSubmit(e)}>Add</Button>
      </div>
    );
  }

}
export default Form;
