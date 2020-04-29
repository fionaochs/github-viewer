import React from 'react';
import PropTypes from 'prop-types';

const UserDisplay = ({ userName, followers, following, url }) => (
  <ul>
    <li key={userName}>
      <p>{userName}</p>
      <p>{followers}</p>
      <p>{following}</p>
      <a href={url}>Link to github</a>
    </li>
  </ul>
);

UserDisplay.propTypes = {
  userName: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  following: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default UserDisplay;
