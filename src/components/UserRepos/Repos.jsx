import React from 'react';
import PropTypes from 'prop-types';
import Repo from './Repo.jsx';

const Repos = ({ repos }) => {
  const repoElements = repos.map(repo => (
    <li key={repo.id}>
      <Repo {...repo} />
    </li>
  ));

  return (
    <ul>
      {repoElements}
    </ul>
  );
};

Repos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    repoName: PropTypes.string.isRequired,
    pr: PropTypes.string.isRequired,
    issues: PropTypes.string.isRequired,
  })).isRequired
};

export default Repos;

