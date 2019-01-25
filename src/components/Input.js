import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addTodo, clearTodo } from '../actions/todo';

import Loader from './Loader';

const styles = {
  wrapperInput: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '20px',
  },
  input: {
    padding: '6px',
    height: '36px',
    width: '60%',
  },
  buttonAdd: {
    display: 'flex',
    justifyContent: 'center',
    width: '20%',
    backgroundColor: '#28a745',
    border: 'none',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: 'white',
  },
};

export class Input extends Component {
  state = {
    newTodoText: '',
  };

  componentDidMount() {
    this.clearTodo();
  }

  componentDidUpdate() {
    this.clearTodo();
  }

  addTodo = () => {
    const { addTodo } = this.props;
    const { newTodoText } = this.state;
    addTodo(newTodoText);
  };

  clearTodo = () => {
    const {
      todo: { addTodoClear },
    } = this.props;
    const { clearTodo: clear } = this.props;
    if (addTodoClear) {
      this.setState({
        newTodoText: '',
      });
      clear(false);
    }
  };

  render() {
    const {
      todo: { addTodoFetching },
    } = this.props;
    const { newTodoText } = this.state;
    return (
      <div style={styles.wrapperInput}>
        <input
          type="text"
          placeholder="Digite um todo..."
          disabled={addTodoFetching}
          style={styles.input}
          value={newTodoText}
          onChange={e => this.setState({
            newTodoText: e.target.value,
          })
          }
        />
        <button
          type="button"
          style={styles.buttonAdd}
          onClick={this.addTodo}
          disabled={addTodoFetching}
        >
          {addTodoFetching ? <Loader stylesLoader={{ width: '18px', height: '18px' }} /> : 'Add'}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addTodo, clearTodo }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input);
