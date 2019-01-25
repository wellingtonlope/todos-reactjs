import React from 'react';
import { shallow } from 'enzyme';

import { Empty } from './Empty';

describe('<Empty />', () => {
  it('should render', () => {
    const wrapper = shallow(<Empty />);
    expect(wrapper.text()).toEqual('Não possui todos');
  });
});
