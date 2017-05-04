import React, { Component } from 'react';
import {Materialize, Col,Row, Collection, CollectionItem,Button, Icon, Input, Toast, Collapsible, CollapsibleItem} from 'react-materialize';

class ToDoList  extends Component {
  state ={
    toDoList:[]
  }
  getInitialState(){
    this.setState({toDoList:[]});
    return this.state;
  }
  constructor(props) {
      super(props)
      this.state.toDoList=[];
  }

  deleteToDo(e){
    console.log(e.key);
    var list = this.state.toDoList;
    list.splice(e.currentTarget.id, 1);
    this.setState(list);
  }

  render(){
    return(
      <Row>
        <Col m={12}>
          <Collection>
              {this.state.toDoList.map((obj, i)=>{
                  return(
                    <CollectionItem className="green-text" href="#" key={i}>
                      <Input name='group1' type='checkbox'  className="green-text" label='.' />
                      {obj.name}
                      <Button waves='light' floating className='red right' id={i} key={i} onClick={(e)=>this.deleteToDo(e)}>
                        <Icon >delete</Icon>
                      </Button>
                    </CollectionItem>
                  );
              })}
          </Collection>
          <Toast toast="here you go!">
            Toast
          </Toast>
        </Col>
      </Row>
    );
  }
}

export default ToDoList;
