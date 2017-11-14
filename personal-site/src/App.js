import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var navItems = [
  {
    name: 'Home',
    url: '#',
    alt: 'Home button',
  },
  {
    name: 'About',
    url: '#',
    alt: 'About button',
  },
  {
    name: 'Projects',
    url: '#',
    alt: 'Projects button',
  },
  {
    name: 'Contact',
    url: '#',
    alt: 'Contact button',
  }
]

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      navItems
    };
  }
  render() {
    return (
      <div className="container-fluid App">
        {/* <h4>Todo Count: <span className="badge badge-secondary">{this.state.todos.length}</span></h4>
          <ul className="list-group">
          {this.state.todos.map((todo, index) =>
            <li className="list-group-item" key={index}>
          <h4 className="list-group-item-heading">{todo.todoTitle}</h4>
            </li>
          )}
        </ul> */}
        <div id="hero"></div>
        <h2 id="myBrand">Riley Mathis</h2>
        <Nav></Nav>
      </div>
    );
  }
}

class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      navItems
    }
  }
  render(){
    return(
      <nav className="navbar navbar-expand-lg fixed-bottom navbar-dark bg-*">
        {/* <a className="navbar-brand" href="#">Riley Mathis</a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {this.state.navItems.map((item, index) =>
              index===0 ? (
                <li className="nav-item active">
                  <a className="nav-link" href="{item.url}">{item.name}<span className="sr-only">(current)</span></a>
                </li>) : (
                  <li className="nav-item">
                    <a className="nav-link" href="{item.url}">{item.name}<span className="sr-only">(current)</span></a>
                  </li>)
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default App;
