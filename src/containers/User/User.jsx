import React, { Component } from 'react';
import { fetchUser } from '../../services/githubUser.js';
import { fetchRepos } from '../../services/githubRepos.js';
import UserControls from '../../components/UserDisplay/UserDisplay.jsx';
import Repos from '../../components/UserRepos/Repos.jsx';

export default class User extends Component {
  state = {
    userName: '',
    repos: []
  }

  componentDidMount() {
  }
  
  handleSubmit = () => {
    fetchUser()
      .then(userName => this.setState({ userName }));
  
    fetchRepos()
      .then(repos => this.setState({ repos }));
  }

  render() {
    const { userName, repos } = this.state;

    return (
      <>
        <UserControls onSubmit={this.handleSubmit} userName={userName} />
        <Repos repos={repos} />
      </>
    );
  }
}
