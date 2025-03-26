import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button } from "react-bootstrap";

function App() {
  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>React + Bootstrap</Card.Title>
          <Card.Text>
            Esta es una tarjeta de Bootstrap dentro de un proyecto React.
          </Card.Text>
          <Button variant="primary">Haz clic aquí</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
