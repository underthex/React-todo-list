import React, { Component } from "react";

class TodoAdd extends Component {
  static defaultProps = {
    priorities: [1, 2, 3, 4, 5, 6, 7]
  };

  addTodo(e) {
    e.preventDefault();
    this.props = {
      item: this.refs.item.value,
      priority: this.refs.priority.value
    };
    console.log(this.props);
    //this.props.addTodo(this.props);
  }

  render() {
    let priorities = this.props.priorities.map(p => {
      return (
        <option
          key={p}
          value={p}>priority: {p}</option>
      )
    });
    return (
      <div className="TodoAdd">
        <form onSubmit={this.addTodo.bind(this)}>
          <input type='text'
                 size='30'
                 ref='item'
                 placeholder='Enter a todo item' /> &nbsp;
          <select ref='priority'>
            {priorities}
          </select> &nbsp;
          <button type='submit'>[+] ADD</button>
        </form>
      </div>
    );
  }
}

export default TodoAdd;
