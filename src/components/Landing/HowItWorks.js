import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HowItWorks.css';

class HowItWorks extends Component {
  render() {
    return (
      <section className="howItWorks">
        <div className="right-align howItWorks__title">
          <h1 className="arrow">&#8595;</h1>
          <h1>How it works</h1>
        </div>

        <ol className="howItWorks__steps">
          <li>Charity needs a creative, but can't afford to hire one</li>
          <li>Charity creates a profile highlighting what they do and why.</li>
          <li>Charity posts a project.</li>
          <li>
            Creative wants to donate their expertise and searches through
            projects on create for a cause
          </li>
          <li>Creative applies finds a project and applies.</li>
          <li>Charity sees creative's application and accepts offer.</li>
          <li>
            Charity gets their project completed, the creative gets a new
            portfolio piece, making it a win-win.
          </li>
        </ol>

        <Link to="/get-started">
          <button className="getStarted__btn">Get Started</button>
        </Link>
      </section>
    );
  }
}

export default HowItWorks;
