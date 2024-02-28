import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Col, Row } from "reactstrap";
import { ImagePath } from "@/Constant";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const SingleOppertunity = ({ id }: { id: string }) => {
  const getPostDetil = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/package/getPackageDetails`,
        {
          params: {
            package_id: id,
          },
        }
      );
      return response?.data?.package;
    } catch (error) {
      console.log(error);
    }
  };
  const {
    data: packageDetails,
    error,
    isLoading,
  } = useQuery(`packageDetails_${id}`, getPostDetil, {
    enabled: !!id, // Set enabled to false initially
  });

  return (
    <div>
      <h1 className="card-title">{packageDetails?.package_name}</h1>

      <h4 className="card-title my-2 txt-danger">
        Target: {packageDetails?.package_target}
      </h4>

      <Row>
        <Col lg="6">
          <img
            style={{ height: "200px" }}
            src={`${ImagePath}/01.jpeg`}
            alt="drawing-room"
            className="d-block w-100 img-responsive img-fluid object-fit-contain p-0"
          />
        </Col>

        <Col lg="6">
          <Row className="mt-3">
            <Col xs="6">
              <p className="card-title mb-1 txt-dark">Collected :</p>
              <p className="card-title mb-1 txt-dark">Remaining :</p>
              <p className="card-title mb-1 txt-dark">Risk Level :</p>
              <p className="card-title mb-1 txt-dark">Box Type :</p>
              <p className="card-title mb-1 txt-dark">Package Unit :</p>
            </Col>

            <Col xs="6">
              <p className="card-title mb-1 txt-danger">
                {packageDetails?.package_target -
                  packageDetails?.package_remaining}
              </p>
              <p className="card-title mb-1 txt-danger">
                {packageDetails?.package_remaining}
              </p>

              <p className="card-title mb-1 txt-danger">
                {packageDetails?.package_risk_level}
              </p>
              <p className="card-title mb-1 txt-danger">
                {packageDetails?.package_box_type}
              </p>
              <p className="card-title mb-1 txt-danger">
                {packageDetails?.package_unit}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <p className="card-title mb-1 txt-dark">Description :</p>

          <p className="card-title mb-1 ">
            {packageDetails?.package_description}
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default SingleOppertunity;
