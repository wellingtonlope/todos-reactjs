import axios from 'axios';
import {
  GET_TODOS,
  ADD_TODO_REQUEST,
  ADD_TODO_ERROR,
  ADD_TODO_SUCCESS,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_ERROR,
  REMOVE_TODO_REQUEST,
  ADD_TODO_CLEAR,
} from '../constants/actionTypes';

export const getTodos = () => async (dispatch) => {
  try {
    const response = await axios.get('https://todos-cedb8.firebaseio.com/todos.json');

    const todos = [];
    if (response.data) {
      const keys = Object.keys(response.data);
      keys.forEach(key => todos.push({ id: key, description: response.data[key].description }));
    }

    dispatch({
      type: GET_TODOS,
      payload: todos,
    });
  } catch (error) {
    console.error(error);
  }
};

export const clearTodo = clean => (dispatch) => {
  dispatch({
    type: ADD_TODO_CLEAR,
    payload: clean,
  });
};

export const addTodo = description => async (dispatch) => {
  dispatch({
    type: ADD_TODO_REQUEST,
  });

  try {
    await axios.post('https://todos-cedb8.firebaseio.com/todos.json', {
      description,
    });

    dispatch(clearTodo(true));

    dispatch({
      type: ADD_TODO_SUCCESS,
    });

    dispatch(getTodos());
  } catch (error) {
    dispatch({
      type: ADD_TODO_ERROR,
    });
    console.error(error);
  }
};

export const removeTodo = todo => async (dispatch) => {
  dispatch({
    type: REMOVE_TODO_REQUEST,
    payload: todo.id,
  });

  try {
    await axios.delete(`https://todos-cedb8.firebaseio.com/todos/${todo.id}.json`);

    dispatch(getTodos());

    dispatch({
      type: REMOVE_TODO_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: REMOVE_TODO_ERROR,
    });
    console.error(error);
  }
};
