import React, { Component } from 'react';
import { fetchUser } from '../../services/githubUser.js';
import UserControls from '../../components/UserControls/UserControls.jsx';
import UserDisplay from '../../components/UserDisplay/UserDisplay.jsx';

export default class User extends Component {
  state = {
    userName: 'fionaochs',
    userDisplay: {
      followers: 2,
      following: 2,
      userName: 'fionaochs',
      url: 'url'
    },
    loading: false
  }
  
  componentDidMount() {
    fetchUser(this.state.userName)
      .then(userDisplay => this.setState({ userDisplay, loading: false }));
  }

  handleSubmit = ({ target }) => { 
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { userName, userDisplay, loading } = this.state;

    // if(loading) return (<h1>Loading</h1>);
    
    return (
      <>
        <UserControls onSubmit={this.handleSubmit} userName={userName} />
        <UserDisplay {...userDisplay}/>
      </>
    );
  }
}
