import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ name, html_url }) => {
  return (
    <a href={html_url}>{name}</a> 
);
};

Repo.propTypes = {
  id: PropTypes.number.isRequired,
  html_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Repo;
