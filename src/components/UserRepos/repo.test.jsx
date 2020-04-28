import React from 'react';
import { shallow } from 'enzyme';
import Repo from './Repos';

describe('Repo', () => {
  it('matches a users repo snapshot', () => {
    const wrapper = shallow(<Repo userName='me'
      repoName='rottenPlantain'
      pr='5'
      issues='issues' />);
    expect(wrapper).toMatchSnapshot();
  });
});
