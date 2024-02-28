"use client";
import React, { useEffect } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import ProductDetails from "./UserDetails";
import ClothsDetails from "./PaymentsDetails";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "@/app/loading";
import { ImagePath } from "@/Constant";
import UserDetails from "./UserDetails";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const ProductPageContainer = () => {
  const [id, setId] = React.useState<string | null>(null);

  const extractTokenFromUrl = (url: string, paramName: string) => {
    const urlSearchParams = new URLSearchParams(url);
    return urlSearchParams.get(paramName);
  };
  useEffect(() => {
    const url = window.location.search;
    const ID = extractTokenFromUrl(url, "id");
    setId(ID);
  }, []);

  const getPackageDetil = async () => {
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
      console.error(error);
    }
  };
  const {
    data: userDetail,
    error,
    isLoading,
  } = useQuery(`userDetails_${id}`, getPackageDetil, {
    enabled: !!id, // Set enabled to false initially
  });

  const getPackagePayment = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/payment/getUserPayments`, {
        params: {
          user_id: id,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true,
      });
      return response?.data?.payments;
    } catch (error) {
      console.error(error);
    }
  };

  const {
    data: payments,
    error: imgError,
    isLoading: imgLoading,
  } = useQuery(`userPayments_${id}`, getPackagePayment, {
    enabled: !!id,
  });

  return (
    <Container fluid>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Row>
            <Col xxl="4" md="6" className="box-col-6">
              <Card>
                <CardBody className="p-2 ecommerce-slider">
                  <img
                    // style={{ height: "200px" }}
                    src={`${userDetail?.user_photo}`}
                    alt="drawing-room"
                    className="rounded-4 p-2 img-fluid "
                  />
                </CardBody>
              </Card>
            </Col>
            <UserDetails data={userDetail} />
          </Row>
          <Card>
            <Row className="product-page-main">
              <ClothsDetails data={userDetail} payment={payments} />
            </Row>
          </Card>
        </div>
      )}
    </Container>
  );
};

export default ProductPageContainer;
