import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { addTodo, clearTodo } from "../actions/todo";

import Loader from "./Loader";

export class Input extends Component {
  state = {
    newTodoText: ""
  };

  addTodo = () => {
    this.props.addTodo(this.state.newTodoText);
  };

  clearTodo = () => {
    const { addTodoClear } = this.props.todo;
    if (addTodoClear) {
      this.setState({
        newTodoText: ""
      });
      this.props.clearTodo(false);
    }
  };

  componentDidMount() {
    this.clearTodo();
  }

  componentDidUpdate() {
    this.clearTodo();
  }

  render() {
    const { addTodoFetching, addTodoError } = this.props.todo;
    return (
      <div style={styles.wrapperInput}>
        <input
          type="text"
          placeholder="Digite um todo..."
          disabled={addTodoFetching}
          style={styles.input}
          value={this.state.newTodoText}
          onChange={e =>
            this.setState({
              newTodoText: e.target.value
            })
          }
        />
        <button
          style={styles.buttonAdd}
          onClick={this.addTodo}
          disabled={addTodoFetching}
        >
          {addTodoFetching ? (
            <Loader stylesLoader={{ width: "18px", height: "18px" }} />
          ) : (
            "Add"
          )}
        </button>
      </div>
    );
  }
}

const styles = {
  wrapperInput: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "20px"
  },
  input: {
    padding: "6px",
    height: "36px",
    width: "60%"
  },
  buttonAdd: {
    display: "flex",
    justifyContent: "center",
    width: "20%",
    backgroundColor: "#28a745",
    border: "none",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "white"
  }
};

const mapStateToProps = state => ({
  todo: state.todo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addTodo, clearTodo }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
