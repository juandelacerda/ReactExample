import React, { Component } from 'react';
import logo from '../icons/logo.svg';
import '../css/App.css';
import { Navbar, NavItem } from 'react-materialize';
import Form from './Form'
import ToDoList from './ToDoList'

class App extends Component {

  addToDo(){
    var list = this.refs.toDoList.state.toDoList;
    list.push({name:this.refs.form.state.name});
    this.refs.toDoList.setState({toDoList:list})
  }

  render() {
    return (
      <div>
        <Navbar brand='logo' className="blue" right>
          <NavItem href='get-started.html'>Getting started</NavItem>
          <NavItem href='components.html'>Components</NavItem>
        </Navbar>
        <Form ref="form" addToDoHandler={(e)=>this.addToDo(e)}/>
        <ToDoList ref="toDoList"/>
      </div>
    );
  }
}

export default App;
