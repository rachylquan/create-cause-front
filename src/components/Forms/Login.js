import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

class Login extends Component {
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
    this.props.history.push(`/nonprofit/1`);
  }

  render() {
    return (
      <section className="Login__container secondary-bg">
        <Link to="/">
          <span>&#8592; &ensp;</span>Cancel
        </Link>
        <h1 className="center-align">
          <b>Nonprofit</b>
          <br />
          Login
        </h1>
        <form className="Login">
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
            Log In
          </button>
        </form>

        <p className="center-align">
          Don't have an account?
          <br />
          <Link to="/signup">Sign Up</Link>
        </p>
      </section>
    );
  }
}

export default Login;
