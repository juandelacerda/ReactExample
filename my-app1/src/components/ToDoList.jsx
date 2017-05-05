import React, { Component } from 'react';
import {Row, Col, Collection, CollectionItem, Button, Icon} from 'react-materialize';
import '../css/ToDoList.css';

class ToDoList extends Component {

  constructor(props){
    super(props);
    this.state={
      list:[]
    };
  }

  state = {
    list:[]
  }

  getResetState = ()=>{
    this.state={
      list:[]
    };
  }

  onClickDeleteItem =(e)=>{
    var i = parseInt(e.currentTarget.id)
    var list = this.state.list;
    list.splice(i,1);
    this.setState({list:list});
  }

  render() {
    return (
      <Row>
        <Col m={12} s={12}>
          <Collection>
            {this.state.list.map((element, i)=>{
              return (
                <CollectionItem key={i} href="#" className="green-text valign-wrapper">
                    {element.name}
                    <Button id={i} floating onClick={this.onClickDeleteItem} className="red right top-floating-button" waves='light' icon="delete"></Button>
                </CollectionItem>)
            })}
          </Collection>
        </Col>
      </Row>

    );
  }
}

export default ToDoList;
