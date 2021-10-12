import React from "react";
import "./App.css";
// App components.
import TaskList from "./components/TaskList";

function App() {
  return (
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <h2>Tactics</h2>
          <hr />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
