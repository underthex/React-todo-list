import React, { Component } from 'react';

class TodoList extends Component {
  deleteTodo(id) {
    this.props.deleteTodo(id);
  }

  render() {
    console.log(this.props.items);

    let items = '';
    if(this.props.items) {
      items = this.props.items.map(item => {
        return (
          <li id={item.id} key={item.id}>
            {item.item} (priority: {item.priority}) &nbsp;
            <button
              onClick={this.deleteTodo.bind(this, item.id)}
            >X</button>
          </li>
        );
      });
    }

    return (
      <div className='TodoList'>
        <h3>TO DO LIST:</h3>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}

export default TodoList;