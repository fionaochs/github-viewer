import React, { Component } from 'react';
import { fetchUser } from '../../services/githubUser.js';
import { fetchRepos } from '../../services/githubRepos.js';
import UserControls from '../../components/UserDisplay/UserDisplay.jsx';
import Repos from '../../components/UserRepos/Repos.jsx';
import UserDisplay from '../../components/UserDisplay/UserDisplay.jsx';

export default class User extends Component {
  state = {
    userName: 'fionaochs',
    userDisplay: {},
    repos: [],
    loading: true
  }
  
  componentDidMount() {
    fetchUser(this.state.userName)
      .then(userDisplay => this.setState({ userDisplay, loading: false }));

    fetchRepos(this.state.userName)
      .then(repos => this.setState({ repos }));
  }

  handleSubmit = ({ target }) => { 
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { userName, repos, userDisplay, loading } = this.state;

    if(loading) return <h1>Loading</h1>;
    
    return (
      <>
        <UserControls onSubmit={this.handleSubmit} userName={userName} />
        <UserDisplay {...userDisplay}/>
        <Repos repos={repos} />
      </>
    );
  }
}
