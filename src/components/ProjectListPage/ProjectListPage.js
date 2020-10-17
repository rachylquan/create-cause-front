import React, { Component } from 'react';
import ProjectList from '../ProjectList/ProjectList';

class ProjectListPage extends Component {
  render() {
    return (
      <section className="ProjectList">
        <button
          className="Back__btn"
          onClick={() => this.props.history.goBack()}
        >
          <span>&#8592; &ensp;</span>Back
        </button>
        <h1 className="right-align">Projects</h1>
        <ProjectList />
      </section>
    );
  }
}

export default ProjectListPage;
