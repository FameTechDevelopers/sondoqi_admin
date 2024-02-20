import { Card, CardBody, Col } from "reactstrap";
import { UserContinent } from "@/Constant";
import UserByContinentBody from "./UserByContinentBody";
import DashboardCommonHeader from "../../common/DashboardCommonHeader";

const UserByContinent = () => {
  return (

    <Col xxl="6" className="container-fluid dashboard-3">
      <Card className="overflow-hidden">
        <DashboardCommonHeader title={UserContinent} />
        <CardBody className="user-continent pb-0">
          <UserByContinentBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default UserByContinent;
