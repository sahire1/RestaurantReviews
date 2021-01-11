import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">

          <li className="navbar-item">
          <Link to="/" className="nav-link">See all Restaurants</Link>
          </li>
          <li className="navbar-item">
          <Link to="/rest" className="nav-link">Create New Restaurant</Link>
          </li>
          
        </ul>
        </div>
      </nav>
    );
  }
}