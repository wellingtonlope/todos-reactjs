import React from 'react';
import { shallow } from 'enzyme';

import { Todo } from './Todo';
import { Loader } from './Loader';

describe('<Todo />', () => {
  it('should render', () => {
    const wrapper = shallow(<Todo todo={{ description: 'Test' }} />);
    expect(wrapper.find('span').text()).toEqual('Test');
  });

  it('should with Loader', () => {
    const wrapper = shallow(<Todo removeTodoFetching todo={{ description: 'Test' }} />);
    expect(wrapper.find(Loader).length).toEqual(1);
    expect(wrapper.find('button').props().disabled).toEqual(true);
  });

  it('should call removeTodo', () => {
    const removeTodo = jest.fn();
    const wrapper = shallow(<Todo removeTodo={removeTodo} todo={{ description: 'Test' }} />);
    expect(removeTodo.mock.calls.length).toEqual(0);
    wrapper.find('button').simulate('click');
    expect(removeTodo.mock.calls.length).toEqual(1);
  });
});
