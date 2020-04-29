import React from 'react';
import { shallow } from 'enzyme';
import Repos from './Repos';

describe('Repos', () => {
  it('match a repos snapshot', () => {
    const repos = [
      {
        id: 1,
        userName: 'me',
        repoName: 'repo',
        pr: 'pr',
        issues: 'issues'
      },
      {
        id: 2,
        userName: 'me',
        repoName: 'repo',
        pr: 'pr',
        issues: 'issues'
      }
    ];
    const wrapper = shallow(<Repos repos={repos} />);
    expect(wrapper).toMatchSnapshot();
  });
});
