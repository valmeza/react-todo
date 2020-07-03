import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false,
      },
      {
        id: 2,
        title: "Clean Room",
        completed: false,
      },
      {
        id: 3,
        title: "Code",
        completed: false,
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <h1>
          <Todos todos={this.state.todos} />
        </h1>
      </div>
    );
  }
}

export default App;
