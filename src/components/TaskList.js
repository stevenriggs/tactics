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

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <ul className="list-group">
        {data.tasks.map((task) => {
          return <Task task={task} key={task.id} />;
        })}
      </ul>
    </div>
  );
}
