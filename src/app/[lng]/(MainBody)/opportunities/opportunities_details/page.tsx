"use client";
import React, { useEffect } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import ImageSlider from "./ImageSlider";
import { useAppDispatch } from "@/Redux/Hooks";
import { fetchProductApiData } from "@/Redux/Reducers/ProductSlice";
import ProductDetails from "./ProductDetails";
import ClothsDetails from "./ClothsDetails";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "@/app/loading";
import { ImagePath } from "@/Constant";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const ProductPageContainer = () => {
  const dispatch = useAppDispatch();
  const [dimensions, setDimensions] = React.useState<any>({});
  const [engineMotor, setEngineMotor] = React.useState<any>({});
  const [transmission, setTransmission] = React.useState<any>({});
  const [steering, setSteering] = React.useState<any>({});
  const [suspension, setsuspension] = React.useState<any>({});
  const [wheelTyre, setWheelTyre] = React.useState<any>({});
  const [fuelEconomy, setFuelEconomy] = React.useState<any>({});
  const [safety, setSafety] = React.useState<any>({});
  const [exterior, setExterior] = React.useState<any>({});
  const [instrument, setInstrument] = React.useState<any>({});
  const [info, setInfo] = React.useState<any>({});
  const [comfort, setComfort] = React.useState<any>({});

  const [id, setId] = React.useState<string | null>(null);
  const [token, setToken] = React.useState<string>("");
  const [imagePath, setImagePath] = React.useState<string>("");

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
      console.error(error);
    }
  };
  const {
    data: packageDetail,
    error,
    isLoading,
  } = useQuery(`packageDetails_${id}`, getPackageDetil, {
    enabled: !!id, // Set enabled to false initially
  });

  const getPackagePayment = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/payment/getPackagePayments`,
        {
          params: {
            package_id: id,
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          withCredentials: true,
        }
      );
      return response?.data?.payments;
    } catch (error) {
      console.error(error);
    }
  };

  const {
    data: payments,
    error: imgError,
    isLoading: imgLoading,
  } = useQuery(`packagePayment_${id}`, getPackagePayment, {
    enabled: !!id,
  });

  return (
    <Container fluid>
      {isLoading || imgLoading ? (
        <Loading />
      ) : (
        <div>
          <Row>
            <Col xxl="4" md="6" className="box-col-6">
              <Card>
                <CardBody className="p-2 ecommerce-slider">
                  <img
                    // style={{ height: "200px" }}
                    src={`${ImagePath}/01.jpeg`}
                    alt="drawing-room"
                    className="rounded-4 p-2 img-fluid "
                  />
                </CardBody>
              </Card>
            </Col>
            <ProductDetails data={packageDetail} />
          </Row>
          <Card>
            <Row className="product-page-main">
              <ClothsDetails data={packageDetail} payment={payments} />
            </Row>
          </Card>
        </div>
      )}
    </Container>
  );
};

export default ProductPageContainer;
