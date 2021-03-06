import React from 'react';
import { shallow } from 'enzyme';

import { Input } from './Input';
import { Loader } from './Loader';

describe('<Input />', () => {
  it('should render', () => {
    const wrapper = shallow(<Input todo={{ addTodoFetching: false }} />);
    expect(wrapper.exists('input')).toEqual(true);
    expect(wrapper.state().newTodoText).toEqual('');
  });

  it('should render with Loader and disabled', () => {
    const wrapper = shallow(<Input todo={{ addTodoFetching: true }} />);
    expect(wrapper.find(Loader).length).toEqual(1);
    expect(wrapper.find('input').props().disabled).toEqual(true);
    expect(wrapper.find('button').props().disabled).toEqual(true);
  });

  it('should render without Loader', () => {
    const wrapper = shallow(<Input todo={{ addTodoFetching: false }} />);
    expect(wrapper.find(Loader).length).toEqual(0);
  });

  it('should call clearTodo', () => {});

  it('should call addTodo', () => {
    const addTodo = jest.fn();
    const wrapper = shallow(<Input addTodo={addTodo} todo={{ addTodoFetching: false }} />);
    expect(addTodo.mock.calls.length).toEqual(0);
    wrapper.find('button').simulate('click');
    expect(addTodo.mock.calls.length).toEqual(1);
  });
});
