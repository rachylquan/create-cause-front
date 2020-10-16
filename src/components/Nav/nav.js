import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="App__nav center-align">
        <Link to="/">Create for a Cause</Link>
      </nav>
    );
  }
}

export default Nav;
