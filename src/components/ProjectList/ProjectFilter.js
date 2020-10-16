import React, { Component } from 'react';

class ProjectFilter extends Component {
  state = {
    type: '',
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form className="ProjectFilter">
        <label htmlFor="type">Filter by type:</label>
        <select
          id="type"
          name="type"
          onChange={(event) => this.handleChange(event)}
        >
          <option value="website">Website</option>
          <option value="photography">Photography</option>
        </select>
      </form>
    );
  }
}

export default ProjectFilter;
