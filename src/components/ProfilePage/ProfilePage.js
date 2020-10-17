import React, { Component } from 'react';
import { charity } from './charity';
import { Link } from 'react-router-dom';
import Project from './Project';

class ProfilePage extends Component {
  render() {
    return (
      <>
        <section className="ProfilePage secondary-bg">
          <h1>{charity.name}</h1>
        </section>
        <section className="full-btn center-align">
          <Link to="/edit/charity/:charityId">Edit Profile</Link>
        </section>
        <section>
          <div className="profile__links">
            <a href={charity.website}>{charity.website}</a>
            <br />
            <a href="https://instagram.com">www.instagram.com/charity</a>
            <br />
            <a href="#https://facebook.com">www.facebook.com/charity</a>
            <br />
            <a href="https://youtube.com">www.youtube.com/charity</a>
            <br />
          </div>
          <div className="charity__about"></div>
          <h2 className="right-align section-header">About</h2>
          <p>{charity.about}</p>
        </section>
        <section className="ProjectsContainer">
          <h2 className="section-header left-align">Projects</h2>
          <Link to="/create-project">
            <button>Create New Project</button>
          </Link>
          {charity.projects.map((project) => {
            return <Project key={project.id} project={project} />;
          })}
        </section>
        <section className="secondary-bg center-align">
          <Link to="/">Sign Out</Link>
        </section>
      </>
    );
  }
}

export default ProfilePage;
