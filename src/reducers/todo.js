import {
  ADD_TODO_REQUEST,
  ADD_TODO_ERROR,
  ADD_TODO_SUCCESS,
  ADD_TODO_CLEAR,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_ERROR,
  REMOVE_TODO_REQUEST,
  GET_TODOS,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  todos: [],
  addTodoFetching: false,
  addTodoError: false,
  addTodoClear: false,
  removeTodoFetching: false,
  removeTodoError: false,
  removeTodoId: '',
};

const todo = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload || [],
      };
    case ADD_TODO_REQUEST:
      return {
        ...state,
        addTodoFetching: true,
        addTodoError: false,
      };
    case ADD_TODO_ERROR:
      return {
        ...state,
        addTodoFetching: false,
        addTodoError: true,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        addTodoFetching: false,
        addTodoError: false,
      };
    case ADD_TODO_CLEAR:
      return {
        ...state,
        addTodoClear: action.payload,
      };
    case REMOVE_TODO_REQUEST:
      return {
        ...state,
        removeTodoId: action.payload,
        removeTodoFetching: true,
        removeTodoError: false,
      };
    case REMOVE_TODO_ERROR:
      return {
        ...state,
        removeTodoId: '',
        removeTodoFetching: false,
        removeTodoError: true,
      };
    case REMOVE_TODO_SUCCESS:
      return {
        ...state,
        removeTodoFetching: false,
        removeTodoError: false,
        removeTodoId: '',
      };
    default:
      return state;
  }
};

export default todo;
