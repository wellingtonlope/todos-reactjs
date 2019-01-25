import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import "./styles.css";

import Input from "./components/Input";
import TodosList from "./components/TodosList";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1 style={styles.title}>Todos</h1>

        <Input />

        <TodosList />
      </Provider>
    );
  }
}

const styles = {
  title: {
    fontSize: "2.5rem",
    textAlign: "center",
    color: "white",
    paddingTop: "20px"
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
