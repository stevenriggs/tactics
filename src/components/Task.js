import React from "react";
// Third party.
// import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Task(props) {
  let task = props.task;

  return (
    <li className="list-group-item" key={task.id}>
      <div className="container container-fluid">
        <div className="row no-gutters">
          <div className="col-1">
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
          </div>
          <div className="col-11">
            <div className="row">
              <div className="col">
                <strong>{task.title}</strong>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <small className="font-weight-light text-muted">
                  {task.description}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

function handleCompleteButtonClick(task) {
  console.log(task.title);
}
