import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ userName, repoName, pr, issues, url }) => {
  return (
    <ul>
      <li key={userName.id}>
        <a href={url}>{repoName}</a> 
        <p>{userName}</p>
        <p>{pr}</p>
        <p>{issues}</p>
      </li>
    </ul>
  );
};

Repo.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  repoName: PropTypes.string.isRequired,
  pr: PropTypes.string.isRequired,
  issues: PropTypes.string.isRequired,
};

export default Repo;
