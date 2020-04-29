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
    html_url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired
};

export default Repos;

