import React, { Component } from 'react';
import Repos from '../../components/UserRepos/Repos.jsx';
import { fetchRepos } from '../../services/githubRepos.js';

export default class AllRepos extends Component {
  state = {
    repos: [],
  }

  componentDidMount() {
    fetchRepos()
      .then(repos => this.setState({ repos }));
  }

  render() {
    const { repos } = this.state;

    return (
      <Repos repos={repos} />
    );
  }
}
