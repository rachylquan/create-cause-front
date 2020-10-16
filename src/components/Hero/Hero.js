import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

class Hero extends Component {
  render() {
    return (
      <section className="hero secondary-bg">
        <h1 className="cc-title center-align">
          Create
          <br />
          <span>for a</span>
          <br />
          Cause
        </h1>
        <p className="hero__copy">
          Create for a Cause connects nonprofits with creatives to who want to
          volunteer their expertees.
        </p>
        <span className="arrow"></span>
        <Link to="/signup" className="SignUp__btn">
          <button>Sign Up</button>
        </Link>
      </section>
    );
  }
}

export default Hero;
