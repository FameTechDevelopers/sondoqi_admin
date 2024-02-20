import { ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { useState } from "react";
import Slider from "react-slick";
import { Card, CardBody, Col } from "reactstrap";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const ImageSlider = ({images,token,imagePath}:{images:Array<object>,token:string,imagePath:string}) => {
  const { productItem } = useAppSelector((state) => state.product);
  const [nav1, setNav1] = useState<Slider | null>();
  const [nav2, setNav2] = useState<Slider | null>();

  return (
    <Col xxl="4" md="6" className="box-col-6">
      <Card>
        <CardBody className="p-2 ecommerce-slider">
          <Slider autoplay speed={1000} arrows={false} asNavFor={nav2!} ref={(slider1) => setNav1(slider1)}>
            {
              images?.map((image:any)=>(
                <img src={`${imagePath}/${token}/${image.filename}`} alt={`${image.filename}`} className="rounded-4 p-2 img-fluid "/>
              ))
            }
           {/* <img src={`data:image/jpeg;base64,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`} alt="" className="rounded-4 p-2"  />
           <img src={`data:image/jpeg;base64,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`} alt="" className="rounded-4 p-2"  /> */}
          </Slider>
          <Slider arrows={false} asNavFor={nav1!} ref={(slider2) => setNav2(slider2)} slidesToShow={4} swipeToSlide={true} focusOnSelect={true} infinite={false}>
          {
              images?.map((image:any)=>(
                <img src={`${imagePath}/${token}/${image.filename}`} alt={`${image.filename}`} className="rounded-4 p-2 img-fluid "/>
              ))
            }
          </Slider>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ImageSlider;
