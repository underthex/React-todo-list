import React, { Component } from 'react';
import FirebaseAPI from 'firebase';
import uuid from 'uuid';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

class Todo extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    // Initialize Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyDcLS7WCBD1oE59Q4UBk2RSjkmpABEprrY",
      authDomain: "tomopiggery.firebaseapp.com",
      databaseURL: "https://tomopiggery.firebaseio.com",
      projectId: "tomopiggery",
      storageBucket: "tomopiggery.appspot.com",
      messagingSenderId: "325087179358"
    };
    const firebaseApp = FirebaseAPI.initializeApp(firebaseConfig);
    let ref = firebaseApp.database().ref('Todo');
    ref.on('value', this.initializeState.bind(this), this.errData.bind(this));
  }

  initializeState(data) {
    let objData = data.val(); //Data returned as Object
    let keys = Object.keys(objData); //Object to Array conversion
    let arrData = [];
    for (let i in keys) {
      let k = keys[i],
        item = objData[k].Name,
        priority = objData[k].Priority;
      arrData.push({
        id: k,
        item: item,
        priority: priority
      });
    }
    this.setState({
      items: arrData
    });
  }

  errData(err) {
    console.log('Error', err);
  }

  handleAddTodo(newTodo) {
    let tempTodo = Object.assign([], this.state.items);
    tempTodo.unshift({
      id: uuid.v4(),
      item: newTodo.item,
      priority: newTodo.priority
    });
    this.setState({ items: tempTodo });
    console.log(this.state);
  }

  handleDeleteTodo(id) {
    let tempTodo = Object.assign([], this.state.items);
    let index = tempTodo.findIndex(item => item.id === id);
    tempTodo.splice(index,1);
    this.setState({ todo: tempTodo });
  }

  render() {
    return (
      <div className='Todo'>
        <TodoAdd
          addTodo={this.handleAddTodo.bind(this)}
        />
        <hr />
        <TodoList
          todo={this.state.items}
          deleteTodo={this.handleDeleteTodo.bind(this)}
        />
      </div>
    );
  }
}
export default Todo;
