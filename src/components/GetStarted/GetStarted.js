import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './GetStarted.css';

class GetStarted extends Component {
  render() {
    return (
      <section className="GetStarted">
        <button
          className="Back__btn"
          onClick={() => this.props.history.goBack()}
        >
          <span>&#8592; &ensp;</span>Cancel
        </button>
        <h1 className="right-align">I am a...</h1>
        <Link to="/signup">
          <button>Charity</button>
        </Link>
        <Link to="/projects">
          <button>Creative</button>
        </Link>
      </section>
    );
  }
}

export default GetStarted;
