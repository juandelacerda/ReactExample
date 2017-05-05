import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Form from './Form'
import ToDoList from './ToDoList'
import {Navbar, NavItem} from 'react-materialize'


class App extends Component {

  addToDoListHandler = ()=>{
    var list=this.refs.toDoList.state.list;
    var name = this.refs.form.state.inputValue;

    list.push({name: name});
    this.refs.toDoList.setState({list:list});
    console.log(list);
  }

  render() {
    return (
      <div>
        <Navbar className="blue" right>
          <NavItem>Home</NavItem>
        </Navbar>
        <Form ref="form" addToDoListHandler={this.addToDoListHandler}/>
        <ToDoList ref="toDoList"/>
      </div>

    );
  }
}

export default App;
