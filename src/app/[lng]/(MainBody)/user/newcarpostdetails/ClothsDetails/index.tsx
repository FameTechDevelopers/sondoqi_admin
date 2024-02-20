import { Col, Nav, NavItem, NavLink } from "reactstrap";
import { Href } from "@/Constant";
import { useState } from "react";
import ClothsDetailsTabContent from "./ClothsDetailsTabContent";

const ClothsDetails = ({
  dimensions,
  engineMotor,
  transmission,
  steering,
  suspension,
  wheelTyre,
  fuelEconomy,
  safety,
  exterior,
  instrument,
  info,
  comfort,
}: {
  dimensions: object;
  engineMotor: object;
  transmission: object;
  steering: object;
  suspension: object;
  wheelTyre: object;
  fuelEconomy: object;
  safety: object;
  exterior: object;
  instrument: object;
  info: object;
  comfort: object;
}) => {
  const ClothsDetailsData: string[] = [
    "Dimensions / Transmission",
    "Engine / Steering / Fuel",
    "Brakes / Tyres / Instrumentstion",
    "Exterior / infotainment",
    "Safety / Comfort",
  ];

  const [activeTab, setActiveTab] = useState(1);

  return (
    <Col sm="12">
      <Nav tabs className="nav-primary mb-0">
        {ClothsDetailsData.map((data, index) => (
          <NavItem key={index}>
            <NavLink
              href={Href}
              className={activeTab === index + 1 ? "active" : ""}
              onClick={() => setActiveTab(index + 1)}
            >
              {data}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <ClothsDetailsTabContent
        activeTab={activeTab}
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
    </Col>
  );
};

export default ClothsDetails;
