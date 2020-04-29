import React from 'react';
import { shallow } from 'enzyme';
import UserDisplay from './UserDisplay';

describe('UserDisplay', () => {
  it('matches a user display snapshot', () => {
    const wrapper = shallow(<UserDisplay userName='me'
      followers='50'
      following='50'
      link='https://rickandmortyapi.com/api/UserDisplay/avatar/1.jpeg' />);
    expect(wrapper).toMatchSnapshot();
  });
});
