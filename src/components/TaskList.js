import React from "react";
// react-boostrap
import { Container, Row, Col, Button } from "react-bootstrap";
// Third party.
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import "bootstrap-icons/font/bootstrap-icons.css";
// App components.
import Task from "./Task";
import AddTaskModal from "./AddTaskModal";

const queryClient = new QueryClient();

export default function TaskList() {
  const [addModalShow, setAddModalShow] = React.useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <List addModalShow={addModalShow} setAddModalShow={setAddModalShow} />
    </QueryClientProvider>
  );
}

function List(props) {
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
    <Container fluid className="m-0 p-0">
      <Row className="mb-3">
        <Col>
          <Button
            disabled={!data.tasks}
            onClick={() => props.setAddModalShow(true)}
            size="sm"
            type="button"
            variant="primary"
          >
            <i className="bi bi-plus-circle mr-1"></i> Add a task
          </Button>
        </Col>
      </Row>
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
      {props.addModalShow && (
        <AddTaskModal
          show={props.addModalShow}
          onHide={() => props.setAddModalShow(false)}
        />
      )}
    </Container>
  );
}
