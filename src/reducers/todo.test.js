import {
  ADD_TODO_REQUEST,
  ADD_TODO_ERROR,
  ADD_TODO_SUCCESS,
  ADD_TODO_CLEAR,
  REMOVE_TODO_REQUEST,
  REMOVE_TODO_ERROR,
  REMOVE_TODO_SUCCESS,
  GET_TODOS
} from "../constants/actionTypes";

import reducer from "./todo";

const initialState = {
  todos: [],
  addTodoFetching: false,
  addTodoError: false,
  addTodoClear: false,
  removeTodoFetching: false,
  removeTodoError: false,
  removeTodoId: ""
};

describe("todo reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle ADD_TODO_REQUEST", () => {
    expect(reducer({}, { type: ADD_TODO_REQUEST })).toEqual({
      addTodoFetching: true,
      addTodoError: false
    });
  });

  it("should handle ADD_TODO_ERROR", () => {
    expect(reducer({}, { type: ADD_TODO_ERROR })).toEqual({
      addTodoError: true,
      addTodoFetching: false
    });
  });

  it("should handle ADD_TODO_SUCCESS", () => {
    expect(reducer({}, { type: ADD_TODO_SUCCESS })).toEqual({
      addTodoError: false,
      addTodoFetching: false
    });
  });

  it("should handle ADD_TODO_CLEAR return true", () => {
    expect(reducer({}, { type: ADD_TODO_CLEAR, payload: true })).toEqual({
      addTodoClear: true
    });
  });

  it("should handle ADD_TODO_CLEAR return false", () => {
    expect(reducer({}, { type: ADD_TODO_CLEAR, payload: false })).toEqual({
      addTodoClear: false
    });
  });

  it("should handle REMOVE_TODO_REQUEST", () => {
    expect(reducer({}, { type: REMOVE_TODO_REQUEST, payload: 1 })).toEqual({
      removeTodoError: false,
      removeTodoFetching: true,
      removeTodoId: 1
    });
  });

  it("should handle REMOVE_TODO_ERROR", () => {
    expect(reducer({}, { type: REMOVE_TODO_ERROR })).toEqual({
      removeTodoError: true,
      removeTodoFetching: false,
      removeTodoId: ""
    });
  });

  it("should handle REMOVE_TODO_SUCCESS", () => {
    expect(reducer({}, { type: REMOVE_TODO_SUCCESS })).toEqual({
      removeTodoFetching: false,
      removeTodoError: false,
      removeTodoId: ""
    });
  });

  it("should handle GET_TODOS empty", () => {
    expect(
      reducer({ todos: [] }, { type: GET_TODOS, payload: undefined })
    ).toEqual({
      todos: []
    });
  });

  it("should handle GET_TODOS", () => {
    expect(
      reducer(
        { todos: [] },
        { type: GET_TODOS, payload: [{ id: 1, description: "test" }] }
      )
    ).toEqual({
      todos: [{ id: 1, description: "test" }]
    });
  });
});
