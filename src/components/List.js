import React from "react";
// Third party.
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

export default function List() {
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
      {data.tasks.map((task) => {
        return <p>{task.title}</p>;
      })}
    </div>
  );
}
