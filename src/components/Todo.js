import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { removeTodo } from '../actions/todo';
import Loader from './Loader';

const styles = {
  item: {
    backgroundColor: 'rgba(0,0,0,0.15)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '8px 0',
  },
  label: {
    paddingLeft: '8px',
    color: 'white',
    fontWeight: 'bold',
  },
  buttonDelete: {
    display: 'flex',
    justifyContent: 'center',
    height: '36px',
    width: '80px',
    border: 'none',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    backgroundColor: '#dc3545',
  },
};

export const Todo = ({ todo, removeTodo, removeTodoFetching }) => (
  <li style={styles.item}>
    <span style={styles.label}>{todo.description}</span>
    <button
      type="button"
      disabled={removeTodoFetching}
      style={styles.buttonDelete}
      onClick={() => removeTodo(todo)}
    >
      {removeTodoFetching ? <Loader stylesLoader={{ width: '18px', height: '18px' }} /> : 'Done'}
    </button>
  </li>
);

const mapDispatchToProps = dispatch => bindActionCreators({ removeTodo }, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Todo);
