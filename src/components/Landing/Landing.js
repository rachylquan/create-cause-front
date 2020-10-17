import React, { Component } from 'react';
import Hero from '../Hero/Hero';
import HowItWorks from './HowItWorks';

class Landing extends Component {
  render() {
    return (
      <>
        <Hero />
        <HowItWorks />
      </>
    );
  }
}

export default Landing;
