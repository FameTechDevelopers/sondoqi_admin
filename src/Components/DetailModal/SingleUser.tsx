import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Col, Row } from "reactstrap";
import { ImagePath } from "@/Constant";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const SingleUser = ({ id }: { id: string }) => {
  const getUserDetil = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users/getUserDetails`, {
        params: {
          user_id: id,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true,
      });
      return response?.data?.user;
    } catch (error) {
      console.log(error);
    }
  };
  const {
    data: userDetails,
    error,
    isLoading,
  } = useQuery(`userDetails_${id}`, getUserDetil, {
    enabled: !!id, // Set enabled to false initially
  });

  return (
    <div>
      <h1 className="card-title">{userDetails?.user_name}</h1>

      <Row>
        <Col lg="5">
          <img
            style={{ height: "200px" }}
            src={`${userDetails?.user_photo}`}
            alt="drawing-room"
            className="d-block w-100 img-responsive img-fluid object-fit-contain p-0"
          />
        </Col>

        <Col lg="7">
          <Row className="mt-3">
            <Col xs="4">
              <p className="card-title mb-1 txt-dark">Registration No :</p>
              <p className="card-title mb-1 txt-dark">Email :</p>
              <p className="card-title mb-1 txt-dark">Role :</p>
              <p className="card-title mb-1 txt-dark">Phone :</p>
              <p className="card-title mb-1 txt-dark">Wallet Balance :</p>
              <p className="card-title mb-1 txt-dark">Total Balance :</p>
              <p className="card-title mb-1 txt-dark">Total Spend :</p>
              <p className="card-title mb-1 txt-dark">Account Status :</p>
            </Col>

            <Col xs="6">
              <p className="card-title mb-1 txt-danger">
                {userDetails?.commercial_registration_no || "-"}
              </p>
              <p className="card-title mb-1 txt-danger">
                {userDetails?.user_email || "-"}
              </p>
              <p className="card-title mb-1 txt-danger">
                {userDetails?.role_name || "-"}
              </p>

              <p className="card-title mb-1 txt-danger">
                {userDetails?.user_phone || "-"}
              </p>
              <p className="card-title mb-1 txt-danger">
                {"SAR "}
                {userDetails?.wallet_balance || "0"}
              </p>
              <p className="card-title mb-1 txt-danger">
                {"SAR "}
                {userDetails?.total_balance || "0"}
              </p>
              <p className="card-title mb-1 txt-danger">
                {"SAR "}
                {userDetails?.total_spend || "0"}
              </p>
              <p className="card-title mb-1 txt-danger">
                {userDetails?.account_status || "-"}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default SingleUser;
