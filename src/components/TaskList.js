import React from "react";
// Third party.
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import "bootstrap-icons/font/bootstrap-icons.css";
// App components.
import Task from "./Task";

const queryClient = new QueryClient();

export default function TaskList() {
  return (
    <QueryClientProvider client={queryClient}>
      <List />
    </QueryClientProvider>
  );
}

function List() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(window.REACT_APP_API_URL).then((res) => res.json())
  );

  if (window.REACT_APP_DEBUG)
    console.log("TaskList error: " + JSON.stringify(error));
  if (window.REACT_APP_DEBUG)
    console.log("TaskList data: " + JSON.stringify(data));

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="container container-fluid m-0 p-0">
      <div className="row no-gutters mb-3">
        <div className="col">
          <button
            type="button"
            className="btn btn-sm btn-primary"
            disabled={!data.tasks}
          >
            <i className="bi bi-plus-circle mr-1"></i> Add a task
          </button>
        </div>
      </div>
      {data.tasks && (
        <div className="row no-gutters">
          <div className="col">
            <ul className="list-group">
              {data.tasks.map((task) => {
                return <Task task={task} key={task.id} />;
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
