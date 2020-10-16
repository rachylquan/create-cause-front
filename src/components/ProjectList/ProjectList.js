import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import ProjectFilter from './ProjectFilter';
import './ProjectList.css';
import { projects } from './projects';

class ProjectList extends Component {
  render() {
    return (
      <section className="ProjectList">
        <h1 className="right-align">Projects</h1>

        <ProjectFilter />

        {projects.map((project) => {
          return <ProjectItem project={project} key={project.id} />;
        })}
      </section>
    );
  }
}

export default ProjectList;
