import React from 'react';
import PropTypes from 'prop-types';

const UserControls = ({ userName, onSubmit }) => (
  <>
    <input name="name" type="text" value={userName} />
    <button name="button" type="button" onClick={onSubmit}>Search for user</button>
  </>
);

UserControls.propTypes = {
  userName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default UserControls;
