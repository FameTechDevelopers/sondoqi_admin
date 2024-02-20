import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { WithIndicator } from "@/Constant";
import {
  WithIndicatorData,
  WithIndicatorDataList,
} from "@/Data/BonusUi/OwlCarousel";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";

const WithIndicators = ({ images, id }: { images: any; id: string }) => {
  return (
    <Col>
      <Card>
        {/* <CommonCardHeader title={WithIndicator} span={WithIndicatorData} /> */}
        <CardBody className="bg-dark rounded p-2">
          <CommonCarousel
            token={id}
            images={images}
            control
            indecators
            ride="carousel"
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithIndicators;
