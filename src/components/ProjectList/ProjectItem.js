import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectItem extends Component {
  render() {
    const project = this.props.project;

    return (
      <div className="ProjectItem">
        <h2>{project.charity.name}</h2>
        <p>
          <i>{project.type}</i>
          <br />
          <b>Deadline:</b> {project.deadline}
        </p>
        <p>{project.details}</p>
        <Link to={`/project/${project.id}`}>See More</Link>
      </div>
    );
  }
}

export default ProjectItem;
