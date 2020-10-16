import React, { Component } from 'react';
import './ProjectPage.css';
import { project } from './project';

class ProjectPage extends Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <section className="ProjectBanner secondary-bg">
          <button onClick={() => this.props.history.goBack()}>Back</button>
          <h1>{project.nonprofit.name}</h1>
        </section>

        <section className="contact-btn full-btn center-align">
          <a href={'mailto:' + project.nonprofit.email}>Apply</a>
        </section>

        <section className="nonprofit__details">
          <div className="nonprofit__links">
            <p>
              <a href={project.nonprofit.website}>
                {project.nonprofit.website}
              </a>
            </p>
          </div>
          <div className="nonprofit__about">
            <h2 className="section-header right-align">About</h2>
            <p>{project.nonprofit.about}</p>
          </div>
        </section>

        <section className="project__details secondary-bg">
          <h2 className="section-header left-align">The Low Down</h2>
          <p>
            <span className="label">What we need:</span>
            <br />
            <b className="project__detail">{project.type}</b>
            <br />

            <span className="label">Our Timeline:</span>
            <br />
            <b className="project__detail">
              The deadline for this project is {project.deadline_flexibility} ,
              but we'd love if it could be done by {project.deadline}.
            </b>
            <br />

            <span className="label">Notes:</span>
            <br />
            <b className="project__detail">{project.details}</b>
            <br />
          </p>
          <p className="right-align">
            <a
              className="btn apply-btn"
              href={'mailto:' + project.nonprofit.email}
            >
              Apply
            </a>
          </p>
        </section>
      </>
    );
  }
}

export default ProjectPage;
