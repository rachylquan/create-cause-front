import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditProject extends Component {
  state = {
    name: '',
    website: '',
    about: '',
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleAddProject = (event) => {
    event.preventDefault();
    this.props.history.goBack();
  };
  render() {
    const project = {
      id: 1,
      type: 'ads',
      deadline: '11/2/2020',
      deadline_flexibility: 'set',
      details: 'details about this project',
    };
    return (
      <section className="EditProject">
        <Link to="/charity/:charityId">
          <span>&#8592; &ensp;</span>Cancel
        </Link>
        <h2>Project Details:</h2>
        <form className="EditProject__form">
          <div className="form-sec">
            <label htmlFor="project-type">Project Type:</label>
            <select
              id="project-type"
              name="project-type"
              defaultValue={project.type}
              required
            >
              <option value="">Select a type of project</option>
              <option value="website">Website</option>
              <option value="photography">Photography</option>
              <option value="ads">Advertisement Design</option>
            </select>
          </div>

          <div className="project-sec">
            <label htmlFor="deadline">Deadline:</label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              defaultValue={new Date(project.deadline)}
              required
              onChange={(event) => this.handleChange(event)}
            />
          </div>

          <div className="form-sec">
            <label htmlFor="deadline-flexibility">Deadline Flexibility:</label>
            <select
              id="deadline-flexibility"
              name="deadline-flexibility"
              defaultValue={project.deadline_flexibility}
              required
              onChange={(event) => this.handleChange(event)}
            >
              <option value="">How flexible is your deadline?</option>
              <option value="set">Needs to be done by date</option>
              <option value="super">No rush - super flexible</option>
            </select>
          </div>

          <div className="form-sec">
            <label htmlFor="details">Description / Important notes:</label>
            <textarea
              id="details"
              name="details"
              placeholder={project.details}
              onChange={(event) => this.handleChange(event)}
            ></textarea>
          </div>

          <button
            type="submit"
            onClick={(event) => this.handleAddProject(event)}
          >
            Save Details
          </button>
        </form>
      </section>
    );
  }
}

export default EditProject;
