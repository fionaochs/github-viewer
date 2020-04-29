import React from 'react';
import { shallow } from 'enzyme';
import UserControls from './UserControls';

describe('UserControls', () => {
  it('matches a user snapshot', () => {
    const wrapper = shallow(<UserControls userName="userName"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
