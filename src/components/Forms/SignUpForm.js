import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSignUp(event) {
    event.preventDefault();
    this.props.history.push(`/charity/1`);
  }

  render() {
    return (
      <section className="SignUpForm__container secondary-bg">
        <button
          className="Back__btn"
          onClick={() => this.props.history.goBack()}
        >
          <span>&#8592; &ensp;</span>Cancel
        </button>
        <h1 className="center-align">
          <b>Charity</b>
          <br />
          Sign Up
        </h1>
        <form className="SignUpForm">
          <div className="form-sec">
            <label htmlFor="name">Charity Name</label>
            <input
              name="name"
              type="text"
              id="name"
              required
              onChange={(event) => this.handleChange(event)}
            />
          </div>

          <div className="form-sec">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              id="email"
              required
              onChange={(event) => this.handleChange(event)}
            />
          </div>

          <div className="form-sec">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              id="password"
              required
              onChange={(event) => this.handleChange(event)}
            />
          </div>

          <button
            type="submit"
            onClick={(event) => this.handleSignUp(event)}
            className="submit-btn"
          >
            Sign Up
          </button>
        </form>

        <p className="center-align">
          Already have an account?
          <br />
          <Link to="/login">Log in</Link>
        </p>
      </section>
    );
  }
}

export default SignUpForm;
