import React from "react";
import "./App.css";
// App components.
import List from "./components/List";

function App() {
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Tactics</h2>
          <hr />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
