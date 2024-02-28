import { Card, CardBody, Col, Row } from "reactstrap";

import { PackageInfo } from "./PackageInfo";

const PackageDetails = ({ data }: { data: any }) => {
  return (
    <Col className="box-col-6 order-xxl-0 order-1">
      <Card>
        <CardBody>
          <div className="product-page-details">
            <h3 className="f-w-600">{data?.package_name}</h3>
          </div>

          <hr />
          <PackageInfo data={data} />
          <Row>
            <Col md="4">
              <h5 className="f-w-600 product-title">Total Contributions</h5>
            </Col>
            <Col md="8">
              <div className="d-flex">
                <span className="ms-2">{data?.total_contribution}</span>
              </div>
            </Col>
          </Row>
          <hr />
        </CardBody>
      </Card>
    </Col>
  );
};
export default PackageDetails;
