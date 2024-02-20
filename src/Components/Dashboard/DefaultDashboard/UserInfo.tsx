"use client";

import { Card, CardBody, Col } from "reactstrap";
import { GoPremium, GoodDayLenaMiller } from "@/Constant";
import Link from "next/link";
import { useAppSelector } from "@/Redux/Hooks";

const UserInfo = () => {
  // const { i18LangStatus } = useAppSelector((state) => state.langSlice);
  const { user } = useAppSelector((state) => state.user);

  return (
    <Col xl="5" md="6" className="proorder-xl-1 proorder-md-1">
      <Card className="profile-greeting p-0">
        <CardBody>
          <div className="img-overlay">
            <h1 className="mt-0">Good day, {user?.name}</h1>
            <p>
              Welcome to the FameWheels family! We are delighted that you have
              visited our dashboard.
            </p>
            <Link className="btn" href={`/dashboard/default_dashboard`}>
              {GoPremium}
            </Link>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default UserInfo;
