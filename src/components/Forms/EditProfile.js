import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditProfile extends Component {
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
    const charity = {
      id: 1,
      name: 'Charity 1',
      email: 'charity@charity.org',
      password: 'charity123',
      about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.`,
      website: 'https://charity.org',
      projects: [
        {
          id: 1,
          type: 'ads',
          deadline: '11/2/2020',
          deadline_flexibility: 'right away',
          details: 'details about this project',
        },

        {
          id: 2,
          type: 'website',
          deadline: '12/2/2020',
          deadline_flexibility: 'flexible',
          details: 'details',
        },
      ],
    };
    return (
      <section className="EditProfile">
        <Link to="/charity/:charityId">
          <span>&#8592; &ensp;</span>Cancel
        </Link>
        <h2>Profile Details</h2>
        <form className="EditProfile__form">
          <div className="form-sec">
            <label htmlFor="name">Charity Name</label>
            <input
              name="name"
              type="text"
              id="name"
              placeholder={charity.name}
              required
              onChange={(event) => this.handleChange(event)}
            />
          </div>

          <div className="form-sec">
            <label htmlFor="website">Website:</label>
            <input
              name="website"
              type="website"
              id="website"
              placeholder={charity.website}
              required
              onChange={(event) => this.handleChange(event)}
            />
          </div>

          <div className="form-sec">
            <label htmlFor="about">About:</label>
            <textarea
              id="about"
              name="about"
              onChange={(event) => this.handleChange(event)}
              placeholder={charity.about}
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

export default EditProfile;
