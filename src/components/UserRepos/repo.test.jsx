import React from 'react';
import { shallow } from 'enzyme';
import Repo from './Repos';

describe('Repo', () => {
  it('matches a users repo snapshot', () => {
    const wrapper = shallow(<Repo
      name='rottenPlantain'
      html_url='url'
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
