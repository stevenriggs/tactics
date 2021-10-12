import React from "react";
import "./App.css";
// App components.
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <h2>Tactics</h2>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
