import React from "react";
// Third party.
// import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Task(props) {
  let task = props.task;

  return (
    <li className="list-group-item" key={task.id}>
      <div>
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
        <strong>{task.title}</strong>
      </div>
      <small className="font-weight-light text-muted">{task.description}</small>
    </li>
  );
}

function handleCompleteButtonClick(task) {
  console.log(task.title);
}
