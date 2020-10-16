import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Project extends Component {
  render() {
    const project = this.props.project;
    return (
      <div className="ProjectItem">
        <h2>{project.type}</h2>
        <p>
          <b>deadline: </b>
          <i>{project.deadline}</i>
          <br />
          <b>deadline flexibility: </b>
          {project.deadline_flexibility}
          <br />
          <b>project details: </b>
          {project.details}
        </p>
        <Link to="/edit/project/:projectId">
          <button>Edit</button>
        </Link>
      </div>
    );
  }
}

export default Project;
