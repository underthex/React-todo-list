import React, { Component } from 'react';
import firebase from './firebase';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      item: '',
      priority: '5',
      items: []
    };
  }

  componentDidMount() {
    const itemRef = firebase.database().ref('Todo'); //warning: ref’s CaSE SeNSitiVe !!
    itemRef.on('value', this.retrieveData.bind(this), (error) => {
      alert('Error : ' + error);
    });
  }

  retrieveData(data) {
    let objItems = data.val(); //Data returned as Object
    let arrItems = [];
    for( let key in objItems ) {
      arrItems.push({
        id: key,
        item: objItems[key].Name,
        priority: objItems[key].Priority
      });
      this.setState({
        items: arrItems
      });
    }
  }

  handleAddTodo(newTodo) {
    console.log('add');
  }

  handleDeleteTodo(id) {
    const itemRef = firebase.database().ref('/Todo/' + id);
    itemRef.remove();
  }

  render() {
    return (
      <div className='Todo'>

        <TodoAdd
          addTodo={this.handleAddTodo.bind(this)}
        />
        <hr />
        <TodoList
          items={this.state.items}
          deleteTodo={this.handleDeleteTodo.bind(this)}
        />

      </div>
    );
  }
}
export default Todo;
