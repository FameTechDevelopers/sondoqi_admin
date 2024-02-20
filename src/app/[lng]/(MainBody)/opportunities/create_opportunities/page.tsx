import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import CreateNewCarForm from "./CreateNewCarForm";

const NewProjectContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <CreateNewCarForm />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NewProjectContainer;
