import React, { Component } from 'react';
import './CreateProjectForm.css';

const Required = () => <span className="AddProject__required">*</span>;
class CreateProjectForm extends Component {
  state = {
    type: '',
    deadline: '',
    deadline_flexibility: '',
    details: '',
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
    return (
      <section className="CreateProject">
        <h1>Create a Project.</h1>
        <form className="CreateProject__form">
          <div className="form-sec">
            <label htmlFor="project-type">
              Project Type:
              <Required />
            </label>
            <select id="project-type" name="project-type" required>
              <option value="">Select a type of project</option>
              <option value="website">Website</option>
              <option value="photography">Photography</option>
              <option value="advertisement">Advertisement Design</option>
            </select>
          </div>

          <div className="project-sec">
            <label htmlFor="deadline">
              Deadline:
              <Required />
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              required
              onChange={(event) => this.handleChange(event)}
            />
          </div>

          <div className="form-sec">
            <label htmlFor="deadline-flexibility">
              Deadline Flexibility:
              <Required />
            </label>
            <select
              id="deadline-flexibility"
              name="deadline-flexibility"
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
              onChange={(event) => this.handleChange(event)}
            ></textarea>
          </div>

          <button
            type="submit"
            onClick={(event) => this.handleAddProject(event)}
          >
            Add Project
          </button>

          <button onClick={() => this.props.history.goBack()}>Cancel</button>
        </form>
      </section>
    );
  }
}

export default CreateProjectForm;
