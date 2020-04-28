import React from 'react';
import PropTypes from 'prop-types';

const UserControls = ({ userName }) => (
  <form onSubmit={this.props.handleSearch}>
    <input name="name" type="text" value={userName} />
    <button name="button" type="button" onClick={this.props.onSubmit}>Search for user</button>
  </form>

);

UserControls.propTypes = {
  userName: PropTypes.string.isRequired
};

export default UserControls;
