import React, { Component } from 'react';
import uuid from 'uuid';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

class Todo extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.setState({
      owner: 'Leon Tan',
      todo: [{
        id: uuid.v4(),
        item: 'sample list',
        priority: 5
      }]
    });
  }

  handleAddTodo(newTodo) {
    let tempTodo = Object.assign([], this.state.todo);
    tempTodo.unshift({
      id: uuid.v4(),
      item: newTodo.item.value,
      priority: newTodo.priority.value
    });
    this.setState({ todo: tempTodo });
  }

  handleDeleteTodo(id) {
    let tempTodo = Object.assign([], this.state.todo);
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
          todo={this.state.todo}
          deleteTodo={this.handleDeleteTodo.bind(this)}
        />
      </div>
    );
  }
}
export default Todo;
