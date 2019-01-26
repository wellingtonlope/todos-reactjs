import React from 'react';
import { shallow } from 'enzyme';

import Todo from './Todo';
import Empty from './Empty';
import { TodosList } from './TodosList';

describe('<TodosList />', () => {
  it('should render', () => {
    const getTodos = jest.fn();
    const todo = {
      todos: [{ id: '1', description: 'Test' }],
    };
    const wrapper = shallow(<TodosList todo={todo} getTodos={getTodos} />);
    expect(wrapper.find(Todo).length).toEqual(1);
    expect(wrapper.find(Empty).length).toEqual(0);
    expect(getTodos.mock.calls.length).toEqual(1);
  });

  it('should render empty', () => {
    const getTodos = jest.fn();
    const todo = {
      todos: [],
    };
    const wrapper = shallow(<TodosList todo={todo} getTodos={getTodos} />);
    expect(wrapper.find(Todo).length).toEqual(0);
    expect(wrapper.find(Empty).length).toEqual(1);
    expect(getTodos.mock.calls.length).toEqual(1);
  });
});
