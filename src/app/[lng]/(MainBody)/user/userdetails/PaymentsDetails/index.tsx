import {
  Card,
  CardBody,
  Col,
  Input,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Label,
  Badge,
} from "reactstrap";

import { Href, SearchTableButton } from "@/Constant";
import { useMemo, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { CustomCellInterFaces, Opportunity, Payment } from "@/Types/TableType";

const PaymentsDetails = ({
  payment,
  data,
}: {
  payment: [];
  data: Opportunity;
}) => {
  const ClothsDetailsData: string[] = ["Contribution History"];

  const [activeTab, setActiveTab] = useState(1);
  const [filterText, setFilterText] = useState("");

  const filteredItems = payment?.filter((item: any) => {
    const lowerCaseFilterText = filterText.toLowerCase();

    return (
      (item?.package.package_name &&
        item?.package.package_name
          .toLowerCase()
          .includes(lowerCaseFilterText)) ||
      (item?.package.package_risk_level &&
        item?.package.package_risk_level
          .toLowerCase()
          .includes(lowerCaseFilterText))
    );
  });

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div
        id="basic-1_filter"
        className="dataTables_filter d-flex align-items-center"
      >
        <Label className="me-1">{SearchTableButton}:</Label>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFilterText(e.target.value)
          }
          type="search"
          value={filterText}
        />
      </div>
    );
  }, [filterText]);

  const PostsColumn: TableColumn<Payment>[] = [
    {
      name: "Package Name",
      selector: (row) => row.package.package_name,
    },
    {
      name: "Package Risk Level",
      cell: (row) => (
        <CustomBadge
          color={
            row.package.package_risk_level === "عالي"
              ? "danger"
              : row.package.package_risk_level === "قليل"
              ? "warning"
              : "success"
          }
          position={row.package.package_risk_level}
        />
      ),
    },
    {
      name: "Contribution No.",
      selector: (row) => row.contribution_no,
    },

    {
      name: "Payment Date",
      selector: (row) => row.payment_date,
    },
    {
      name: "Contribution Unit",
      selector: (row) => row.package_unit,
    },
    {
      name: "Contribution Amount (SAR)",
      selector: (row) => row.transaction_amount,
    },
  ];

  const CustomBadge: React.FC<CustomCellInterFaces> = ({ position, color }) => {
    return (
      <Badge pill color={color}>
        {position}
      </Badge>
    );
  };

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
      <TabContent activeTab={activeTab}>
        <TabPane tabId={1}>
          <Card className="basic-data-table">
            <CardBody>
              <div className="table-responsive">
                <DataTable
                  className="theme-scrollbar"
                  data={filteredItems}
                  columns={PostsColumn}
                  highlightOnHover
                  subHeader
                  striped
                  fixedHeader
                  fixedHeaderScrollHeight="70vh"
                  subHeaderComponent={subHeaderComponentMemo}
                />
              </div>
            </CardBody>
          </Card>
        </TabPane>
      </TabContent>
    </Col>
  );
};

export default PaymentsDetails;
