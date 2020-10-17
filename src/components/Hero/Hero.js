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
        <h2>Welcome</h2>
        <p className="hero__copy">
          We connect charities with creatives in an effort to do some good.
        </p>
        <Link to="/get-started" className="GetStarted__btn">
          <button>Get Started</button>
        </Link>
      </section>
    );
  }
}

export default Hero;
