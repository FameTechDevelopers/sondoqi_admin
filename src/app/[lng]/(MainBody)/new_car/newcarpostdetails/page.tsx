"use client";
import React, { useEffect } from "react";
import { Card, Container, Row } from "reactstrap";
import ImageSlider from "./ImageSlider";
import { useAppDispatch } from "@/Redux/Hooks";
import { fetchProductApiData } from "@/Redux/Reducers/ProductSlice";
import ProductDetails from "./ProductDetails";
import BrandDetail from "./BrandDetail";
import ClothsDetails from "./ClothsDetails";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "@/app/loading";

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

  const getPostDetil = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/newcarpostdetails`, {
        params: {
          newcarpost_id: id,
        },
      });

      setToken(response?.data?.data?.newcarpost_token);
      setDimensions(JSON.parse(response?.data?.data?.newcarpost_dimensions));
      setEngineMotor(JSON.parse(response?.data?.data?.newcarpost_enginemotor));
      setTransmission(
        JSON.parse(response?.data?.data?.newcarpost_transmission)
      );
      setSteering(JSON.parse(response?.data?.data?.newcarpost_steering));
      setsuspension(
        JSON.parse(response?.data?.data?.newcarpost_suspensionbrakes)
      );
      setWheelTyre(JSON.parse(response?.data?.data?.newcarpost_wheeltyres));
      setFuelEconomy(JSON.parse(response?.data?.data?.newcarpost_fueleconomy));
      setSafety(JSON.parse(response?.data?.data?.newcarpost_safety));
      setExterior(JSON.parse(response?.data?.data?.newcarpost_exterior));
      setInstrument(
        JSON.parse(response?.data?.data?.newcarpost_instrumentation)
      );
      setInfo(JSON.parse(response?.data?.data?.newcarpost_Infotainment));
      setComfort(
        JSON.parse(response?.data?.data?.newcarpost_comfortconvenience)
      );
      setImagePath(response?.data?.image_path);
      return response?.data?.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getPostImages = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/postimages`, {
        params: {
          post_id: token,
        },
      });
      return response?.data?.images;
    } catch (error) {
      console.log(error);
    }
  };

  const {
    data: post,
    error,
    isLoading,
  } = useQuery(`newCarDetails_${id}`, getPostDetil);

  const {
    data: images,
    error: imgError,
    isLoading: imgLoading,
  } = useQuery(`newCarImgs${token}`, getPostImages, {
    enabled: !!token,
  });

  return (
    <Container fluid>
      {isLoading || imgLoading ? (
        <Loading />
      ) : (
        <div>
          <Row>
            <ImageSlider images={images} token={token} imagePath={imagePath} />
            <ProductDetails post={post} />
            {/* <BrandDetail /> */}
          </Row>
          <Card>
            <Row className="product-page-main">
              <ClothsDetails
                dimensions={dimensions}
                engineMotor={engineMotor}
                transmission={transmission}
                steering={steering}
                suspension={suspension}
                wheelTyre={wheelTyre}
                fuelEconomy={fuelEconomy}
                safety={safety}
                exterior={exterior}
                instrument={instrument}
                info={info}
                comfort={comfort}
              />
            </Row>
          </Card>
        </div>
      )}
    </Container>
  );
};

export default ProductPageContainer;
