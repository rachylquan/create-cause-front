import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/nav.js';
import ProjectListPage from './components/Landing/Landing';
import CreateProjectForm from './components/CreateProjectForm/CreateProjectForm';
import SignUpForm from './components/Forms/SignUpForm';
import ProfilePage from './components/ProfilePage/ProfilePage';
import ProjectPage from './components/ProjectPage/ProjectPage';
import Login from './components/Forms/Login';
import EditProfile from './components/Forms/EditProfile';
import EditProject from './components/Forms/EditProject';
import './assets/styles/base.css';
import './App.css';

import { projects, nonprofits } from './store';

class App extends Component {
  state = {
    nonprofits: [],
    projects: [],
  };

  componentDidMount() {
    this.setState({ projects, nonprofits });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={ProjectListPage} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/nonprofit/:nonprofitId" component={ProfilePage} />
          <Route exact path="/create-project" component={CreateProjectForm} />
          <Route exact path="/project/:projectId" component={ProjectPage} />
          <Route
            exact
            path="/edit/nonprofit/:nonprofitId"
            component={EditProfile}
          />
          <Route
            exact
            path="/edit/project/:projectId"
            component={EditProject}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
