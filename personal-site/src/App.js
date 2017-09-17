import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

todos = [
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
      
    );
  }
}

export default App;
