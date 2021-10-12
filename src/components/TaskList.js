import React from "react";
// Third party.
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import "bootstrap-icons/font/bootstrap-icons.css";

const queryClient = new QueryClient();

export default function TaskList() {
  return (
    <QueryClientProvider client={queryClient}>
      <TaskTable />
    </QueryClientProvider>
  );
}

function TaskTable() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(window.REACT_APP_API_URL).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <ul class="list-group">
        {data.tasks.map((task) => {
          return (
            <li class="list-group-item">
              <div>
                {!task.isCompleted && <i className="bi bi-circle mr-3"></i>}
                {task.isCompleted && (
                  <i className="bi bi-check-circle mr-3"></i>
                )}
                <strong>{task.title}</strong>
              </div>
              <small className="font-weight-light text-muted">
                {task.description}
              </small>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
