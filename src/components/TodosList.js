import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getTodos } from "../actions/todo";
import Todo from "./Todo";
import Empty from "./Empty";

class TodosList extends Component {
  componentDidMount() {
    // this.props.getTodos();
  }

  render() {
    const { todo } = this.props;
    return (
      <div style={styles.wrapper}>
        <ul style={styles.list}>
          {todo.todos.length === 0 ? (
            <Empty />
          ) : (
            todo.todos.map(item => (
              <Todo
                todo={item}
                key={item.id}
                removeTodoFetching={
                  todo.removeTodoId === item.id && todo.removeTodoFetching
                }
              />
            ))
          )}
        </ul>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px"
  },
  list: {
    width: "80%",
    listStyle: "none"
  }
};

const mapStateToProps = state => ({
  todo: state.todo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getTodos }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosList);
