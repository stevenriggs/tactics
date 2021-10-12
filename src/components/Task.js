import React from "react";
// Third party.
// import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Task(props) {
  let task = props.task;

  return (
    <li class="list-group-item">
      <div>
        {!task.isCompleted && <i className="bi bi-circle mr-3"></i>}
        {task.isCompleted && <i className="bi bi-check-circle mr-3"></i>}
        <strong>{task.title}</strong>
      </div>
      <small className="font-weight-light text-muted">{task.description}</small>
    </li>
  );
}
