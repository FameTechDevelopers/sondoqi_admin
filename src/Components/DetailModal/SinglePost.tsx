import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Col, Row } from "reactstrap";
import WithIndicators from "../BonusUi/OwlCarousel/WithIndicators";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const SinglePost = ({ id }: { id: number }) => {
  const [features, setFeatures] = React.useState<any>({});

  const getPostDetil = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/vehicle-details`, {
        params: {
          post_id: id,
        },
      });

      if (response?.data?.car_features) {
        setFeatures(JSON.parse(response?.data?.car_features));
        return response?.data;
      } else {
        return response?.data;
      }
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

  const getPostImages = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/postimages`, {
        params: {
          post_id: post?.post_token,
        },
      });

      return response?.data?.images;
    } catch (error) {
      console.log(error);
    }
  };

  const {
    data: images,
    error: imgError,
    isLoading: imgLoading,
  } = useQuery(`postImgs`, getPostImages, {
    enabled: !!post?.post_token,
  });

  return (
    <div>
      <h1 className="card-title">
        {post?.makeName} {post?.modelName} {post?.yearName}
      </h1>
      <p className="card-title fw-600 mt-2 txt-danger d-flex gap-2 align-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          className="main-grid-item-icon txt-danger"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>

        <span className="fw-600"> {post?.city_name} </span>
      </p>
      <h4 className="card-title my-2 txt-danger">RS: {post?.price}</h4>

      <Row>
        <Col lg="6">
          {images && <WithIndicators id={post?.post_token} images={images} />}
        </Col>

        <Col lg="6">
          <h1 className="card-title">More Details</h1>

          <Row className="mt-3">
            <Col xs="6">
              <p className="card-title mb-1 txt-dark">RegisteredIn :</p>
              <p className="card-title mb-1 txt-dark">Fuel Type :</p>
              <p className="card-title mb-1 txt-dark">Transmission :</p>
              <p className="card-title mb-1 txt-dark">Model :</p>
            </Col>

            <Col xs="6">
              <p className="card-title mb-1 txt-danger">
                {post?.registered_in}
              </p>
              <p className="card-title mb-1 txt-danger">{post?.vehicle_fuel}</p>
              <p className="card-title mb-1 txt-danger">{post?.transmission}</p>
              <p className="card-title mb-1 txt-danger">{post?.modelName}</p>
            </Col>

            <Col xs="6">
              <p className="card-title mb-1 txt-dark">Color :</p>
              <p className="card-title mb-1 txt-dark">Engine Capacity(Cc) :</p>
              <p className="card-title mb-1 txt-dark">Make :</p>
              <p className="card-title mb-1 txt-dark">Condition :</p>
            </Col>

            <Col xs="6">
              <p className="card-title mb-1 txt-danger">
                {post?.vehicle_colour}
              </p>
              <p className="card-title mb-1 txt-danger">
                {post?.engine_capacity}
              </p>
              <p className="card-title mb-1 txt-danger">{post?.makeName}</p>
              <p className="card-title mb-1 txt-danger">
                {post?.vehicle_condition}
              </p>
            </Col>
          </Row>

          <h1 className="card-title">Description</h1>
          <p className="card-title fw-600 mt-2 txt-dark d-flex gap-2 align-items-center">
            {" "}
            {post?.description}
          </p>
        </Col>
      </Row>

      <h1 className="card-title mb-3">Features</h1>

      <Row>
        {features?.air_bags === "true" && (
          <Col lg="2" md="4" sm="6">
            <p className="fw-600 txt-dark d-flex gap-2 align-items-center">
              <i className="icofont icofont-check-circled txt-danger fs-5 "></i>
              Air Bags
            </p>
          </Col>
        )}

        {features?.alloy_rims === "true" && (
          <Col lg="2" md="4" sm="6">
            <p className="fw-600  txt-dark d-flex gap-2 align-items-center">
              <i className="icofont icofont-check-circled txt-danger fs-5 "></i>
              Alloy Rims
            </p>
          </Col>
        )}

        {features?.am_fm_radio === "true" && (
          <Col lg="2" md="4" sm="6">
            <p className="fw-600  txt-dark d-flex gap-2 align-items-center">
              <i className="icofont icofont-check-circled txt-danger fs-5 "></i>
              FM Radio
            </p>
          </Col>
        )}

        {features?.cassette_player === "true" && (
          <Col lg="2" md="4" sm="6">
            <p className="fw-600  txt-dark d-flex gap-2 align-items-center">
              <i className="icofont icofont-check-circled txt-danger fs-5 "></i>
              Cassette Player
            </p>
          </Col>
        )}

        {features?.cd_player === "true" && (
          <Col lg="2" md="4" sm="6">
            <p className="fw-600  txt-dark d-flex gap-2 align-items-center">
              <i className="icofont icofont-check-circled txt-danger fs-5 "></i>
              CD Player
            </p>
          </Col>
        )}
        {features?.dvd_player === "true" && (
          <Col lg="2" md="4" sm="6">
            <p className="fw-600  txt-dark d-flex gap-2 align-items-center">
              <i className="icofont icofont-check-circled txt-danger fs-5 "></i>
              DVD Player
            </p>
          </Col>
        )}
        {features?.climate_control === "true" && (
          <Col lg="2" md="4" sm="6">
            <p className="fw-600  txt-dark d-flex gap-2 align-items-center">
              <i className="icofont icofont-check-circled txt-danger fs-5 "></i>
              Climate Control
            </p>
          </Col>
        )}
        {features?.front_camera === "true" && (
          <Col lg="2" md="4" sm="6">
            <p className="fw-600  txt-dark d-flex gap-2 align-items-center">
              <i className="icofont icofont-check-circled txt-danger fs-5 "></i>
              Font Camera
            </p>
          </Col>
        )}
        {features?.front_speakers === "true" && (
          <Col lg="2" md="4" sm="6">
            <p className="fw-600  txt-dark d-flex gap-2 align-items-center">
              <i className="icofont icofont-check-circled txt-danger fs-5 "></i>
              Front Speakers
            </p>
          </Col>
        )}

        {features?.immobilizer_key === "true" && (
          <Col lg="2" md="4" sm="6">
            <p className="fw-600  txt-dark d-flex gap-2 align-items-center">
              <i className="icofont icofont-check-circled txt-danger fs-5 "></i>
              Immobilizer key{" "}
            </p>
          </Col>
        )}

        {features?.heated_seats === "true" && (
          <Col lg="2" md="4" sm="6">
            <p className="fw-600  txt-dark d-flex gap-2 align-items-center">
              <i className="icofont icofont-check-circled txt-danger fs-5 "></i>
              Heated Seats
            </p>
          </Col>
        )}

        {features?.keyless_entry === "true" && (
          <Col lg="2" md="4" sm="6">
            <p className="fw-600  txt-dark d-flex gap-2 align-items-center">
              <i className="icofont icofont-check-circled txt-danger fs-5 "></i>
              Keyless Entry
            </p>
          </Col>
        )}
        {features?.navigation_system === "true" && (
          <Col lg="2" md="4" sm="6">
            <p className="fw-600  txt-dark d-flex gap-2 align-items-center">
              <i className="icofont icofont-check-circled txt-danger fs-5 "></i>
              Navigation System
            </p>
          </Col>
        )}
        {features?.rear_ac_vents === "true" && (
          <Col lg="2" md="4" sm="6">
            <p className="fw-600  txt-dark d-flex gap-2 align-items-center">
              <i className="icofont icofont-check-circled txt-danger fs-5 "></i>
              Rear Ac Vents
            </p>
          </Col>
        )}
        {features?.rear_speakers === "true" && (
          <Col lg="2" md="4" sm="6">
            <p className="fw-600  txt-dark d-flex gap-2 align-items-center">
              <i className="icofont icofont-check-circled txt-danger fs-5 "></i>
              Rear Speakers
            </p>
          </Col>
        )}

        {features?.steering_switches === "true" && (
          <Col lg="2" md="4" sm="6">
            <p className="fw-600  txt-dark d-flex gap-2 align-items-center">
              <i className="icofont icofont-check-circled txt-danger fs-5 "></i>
              Steering Switches
            </p>
          </Col>
        )}
        {features?.power_locks === "true" && (
          <Col lg="2" md="4" sm="6">
            <p className="fw-600  txt-dark d-flex gap-2 align-items-center">
              <i className="icofont icofont-check-circled txt-danger fs-5 "></i>
              Power Locks
            </p>
          </Col>
        )}
        {features?.power_mirrors === "true" && (
          <Col lg="2" md="4" sm="6">
            <p className="fw-600 txt-dark d-flex gap-2 align-items-center">
              <i className="icofont icofont-check-circled txt-danger fs-5 "></i>
              Power Mirrors
            </p>
          </Col>
        )}

        {features?.power_steering === "true" && (
          <Col lg="2" md="4" sm="6">
            <p className="fw-600 txt-dark d-flex gap-2 align-items-center">
              <i className="icofont icofont-check-circled txt-danger fs-5 "></i>
              Power Steering
            </p>
          </Col>
        )}

        {features?.power_windows === "true" && (
          <Col lg="2" md="4" sm="6">
            <p className="fw-600 txt-dark d-flex gap-2 align-items-center">
              <i className="icofont icofont-check-circled txt-danger fs-5 "></i>
              Power Window
            </p>
          </Col>
        )}
        {features?.rear_camera === "true" && (
          <Col lg="2" md="4" sm="6">
            <p className="fw-600 txt-dark d-flex gap-2 align-items-center">
              <i className="icofont icofont-check-circled txt-danger fs-5 "></i>
              Rear Camera
            </p>
          </Col>
        )}
        {features?.rear_seat_entertainment === "true" && (
          <Col lg="2" md="4" sm="6">
            <p className="fw-600 txt-dark d-flex gap-2 align-items-center">
              <i className="icofont icofont-check-circled txt-danger fs-5 "></i>
              Rear Seat Entertainment
            </p>
          </Col>
        )}
        {features?.usb_and_auxillary_cable === "true" && (
          <Col lg="2" md="4" sm="6">
            <p className="card-title fw-600 txt-dark d-flex gap-2 align-items-center">
              <i className="icofont icofont-check-circled txt-danger fs-5 "></i>
              USB And Auxillary Cable
            </p>
          </Col>
        )}
        {features?.sun_roof === "true" && (
          <Col lg="2" md="4" sm="6">
            <p className="card-title fw-600 txt-dark d-flex gap-2 align-items-center">
              <i className="icofont icofont-check-circled txt-danger fs-5 "></i>
              Sun Roof
            </p>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default SinglePost;
