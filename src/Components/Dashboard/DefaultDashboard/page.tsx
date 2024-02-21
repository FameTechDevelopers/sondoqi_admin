"use client";

import React, { useState } from "react";
import { Card, Col, Container, Input, Row } from "reactstrap";
import UserInfo from "./UserInfo";
import OpeningOfLeaflets from "./OpeningOfLeaflets";
import ShiftsOverview from "./ShiftsOverview";
import ProjectsTable from "./ProjectsTable";
import CustomerTransaction from "./CustomerTransaction";
import UserNotifications from "./UserNotifications";
import UpcomingAppointments from "./UpcomingAppointments";
import ActiveMembers from "./ActiveMembers";
import SalesStatistic from "./SalesStatistic";
import SalesByProduct from "./SalesByProduct";
import UserByContinent from "./UserByContinent/page";
import TotalStudents from "../Education/TotalStudents";
import StudyStatistics from "../Education/StudyStatistics";
import TotalSells from "../Ecommerce/TotalSells";
import MonthlyAttendance from "../Education/MonthlyAttendance";
import TopSeller from "../Ecommerce/TopSeller/TopSeller";
import RecentProjects from "../Project/RecentProjects";
import ProjectStatus from "../Project/ProjectStatus";
import TotalProject from "../Project/TotalProject";
import ProjectsOverview from "../Project/ProjectsOverview";
import ClientActivity from "../Project/ClientActivity";
import WebsiteDesign from "../Project/WebsiteDesign";

const DefaultDashboardContainer = () => {
  return (
    <>
      <Container fluid className="default-dashboard">
        <Row className="widget-grid">
          <UserInfo />
          {/* <OpeningOfLeaflets />
          <ShiftsOverview /> */}
        </Row>
      </Container>
      {/* <Container fluid className="default-dashboard">
        <Row className="widget-grid">
          <SalesStatistic />
        </Row>
      </Container>
      <Container fluid className="default-dashboard">
        <Row>
          <TotalSells />
        </Row>
      </Container>

      <Container fluid className="dashboard-4">
        <Row>
          <TotalStudents />
          <StudyStatistics />
        </Row>
      </Container>

      <Container fluid className="dashboard-2">
        <Row>
          <ProjectStatus />
          <RecentProjects />
          <TotalProject />
          <WebsiteDesign />
          <ProjectsOverview />
          <ClientActivity />
        </Row>
      </Container> */}
    </>
  );
};

export default DefaultDashboardContainer;
