import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Col, Row } from "reactstrap";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const NewCarDetials = ({ id }: { id: number }) => {
  const getPostDetil = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/newcarpostdetails`, {
        params: {
          newcarpost_id: id,
        },
      });
      return response?.data?.data;
    } catch (error) {
      console.log(error);
    }
  };
  const {
    data: post,
    error,
    isLoading,
  } = useQuery(
    `postDetails_${id}`,
    getPostDetil
    // {
    //   enabled: !!509, // Set enabled to false initially
    // }
  );

  return (
    <div>
      <h1 className="card-title">
        {post?.make} {post?.model_name} {post?.year}
      </h1>

      <h4 className="card-title my-2 txt-danger">
        RS: {post?.newcarpost_price}
      </h4>

      <Row>
        <Col lg="6">
          <img
            style={{ height: "200px" }}
            src={`https://onlinepayment.famewheels.com/public/posts/${post?.newcarpost_token}/${post?.newcarpost_cover}`}
            alt="drawing-room"
            className="d-block w-100 img-responsive img-fluid object-fit-contain p-0"
          />
        </Col>

        <Col lg="6">
          <Row className="mt-3">
            <Col xs="6">
              <p className="card-title mb-1 txt-dark">Variant :</p>
              <p className="card-title mb-1 txt-dark">Body Type :</p>
              <p className="card-title mb-1 txt-dark">Fuel Type :</p>
              <p className="card-title mb-1 txt-dark">Transmission :</p>
            </Col>

            <Col xs="6">
              <p className="card-title mb-1 txt-danger">
                {post?.newcarpost_variants}
              </p>
              <p className="card-title mb-1 txt-danger">
                {post?.bodytype_name}
              </p>
              <p className="card-title mb-1 txt-danger">
                {" "}
                {post && JSON.parse(post?.newcarpost_enginemotor)?.fuelSystem}
              </p>
              <p className="card-title mb-1 txt-danger">
                {post &&
                  JSON.parse(post?.newcarpost_transmission)?.transmission}
              </p>
              <p className="card-title mb-1 txt-danger">{post?.modelName}</p>
            </Col>

            <Col xs="6">
              <p className="card-title mb-1 txt-dark">Engine Capacity(Cc) :</p>
            </Col>

            <Col xs="6">
              <p className="card-title mb-1 txt-danger">
                {post?.vehicle_colour}
              </p>
              <p className="card-title mb-1 txt-danger">
                {post && JSON.parse(post?.newcarpost_enginemotor)?.displacement}
                cc
              </p>
              <p className="card-title mb-1 txt-danger">{post?.makeName}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default NewCarDetials;
