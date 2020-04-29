import React, { Component } from 'react';
import Repos from '../../components/UserRepos/Repos.jsx';
import { fetchRepos } from '../../services/githubRepos.js';
import PropTypes from 'prop-types';

export default class AllRepos extends Component {
  static propTypes = { userName: PropTypes.string.isRequired }

  state = {
    repos: [{
      id: 1,
      repoName: 'repo',
      html_url: 'https://github.com/fionaochs/router-pokedex'
    },
    {
      id: 2,
      repoName: 'repo2',
      html_url: 'https://github.com/fionaochs/router-pokedex'
    }],
  }

  componentDidMount() {
    fetchRepos(this.props.userName)
      .then(repos => this.setState({ repos }));
  }

  render() {
    const { repos } = this.state;

    return (
      <Repos repos={repos} />
    );
  }
}
