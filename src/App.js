import React from "react";
import "./App.css";
// react-boostrap
import { Container, Row, Col } from "react-bootstrap";
// App components.
import TaskList from "./components/TaskList";

function App() {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h2>Tactics</h2>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <TaskList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
