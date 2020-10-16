import React, { Component } from 'react';
import Hero from '../Hero/Hero';
import ProjectList from '../ProjectList/ProjectList';

class ProjectListPage extends Component {
  render() {
    return (
      <>
        <Hero />
        <ProjectList />
      </>
    );
  }
}

export default ProjectListPage;
