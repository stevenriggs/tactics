import React from "react";
// Third party.
import { Container, Row, Col, Button } from "react-bootstrap";
// import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Task(props) {
  let task = props.task;

  var listGroupItemClass = "list-group-item";
  if (task.isCompleted) {
    listGroupItemClass = listGroupItemClass + " list-group-item-secondary";
  }

  return (
    <li className={listGroupItemClass} key={task.id}>
      <Container fluid>
        <Row>
          <Col xs={1}>
            <button
              className="btn btn-link"
              id="taskCompleteButton"
              key="taskCompleteButton"
              onClick={() => handleCompleteButtonClick(task)}
              type="button"
            >
              {!task.isCompleted && <i className="bi bi-circle"></i>}
              {task.isCompleted && <i className="bi bi-check-circle"></i>}
            </button>
          </Col>
          <Col xs={11}>
            <Row>
              <Col>
                <strong>{task.title}</strong>
              </Col>
            </Row>
            <Row>
              <Col>
                <small className="font-weight-light text-muted">
                  {task.description}
                </small>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </li>
  );
}

function handleCompleteButtonClick(task) {
  console.log(task.title);
}
