import { Col, Row } from "reactstrap";

export const ProductRating = ({ data }: { data: any }) => {
  return (
    <>
      <Row>
        <Col md="4">
          <h5 className="f-w-600 product-title">Contributions</h5>
        </Col>
        <Col md="8">
          <div className="d-flex">
            <span className="ms-2">{data?.contribution_no}</span>
          </div>
        </Col>
      </Row>
      <hr />
    </>
  );
};
