import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var todos = [
  {
    todoTitle: 'todo1',
    todoResponsible: 'Me',
    todoDescription: 'first todo',
    todoPriority: 'high'
  },
  {
    todoTitle: 'todo1',
    todoResponsible: 'Me',
    todoDescription: 'first todo',
    todoPriority: 'high'
  }
]

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos
    };
  }
  render() {
    return (
      <div className="container">
        <h4>Todo Count: <span className="badge badge-secondary">{this.state.todos.length}</span></h4>
        <ul className="list-group">
          {this.state.todos.map((todo, index) =>
            <li className="list-group-item" key={index}>
              <h4 className="list-group-item-heading">{todo.todoTitle}</h4>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
