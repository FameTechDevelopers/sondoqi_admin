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
} from "reactstrap";

import { Href, SearchTableButton } from "@/Constant";
import { useMemo, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Opportunity, Payment } from "@/Types/TableType";

const PaymentDetails = ({
  payment,
  data,
}: {
  payment: [];
  data: Opportunity;
}) => {
  const ClothsDetailsData: string[] = ["Description", "Payment History"];

  const [activeTab, setActiveTab] = useState(1);
  const [filterText, setFilterText] = useState("");

  const filteredItems = payment?.filter((item: any) => {
    const lowerCaseFilterText = filterText.toLowerCase();

    return (
      item?.user_id && item?.user_id.toLowerCase().includes(lowerCaseFilterText)
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
      name: "User Name",
      selector: (row) => row.user.user_name,
    },
    {
      name: "User Email",
      selector: (row) => row.user.user_email,
    },
    {
      name: "User Phone",
      selector: (row) => row.user.user_phone,
    },

    {
      name: "Date",

      selector: (row) => row.payment_date,
    },
    {
      name: "Unit",
      selector: (row) => row.package_unit,
    },
    {
      name: "Amount",
      selector: (row) => row.transaction_amount,
    },
  ];

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
          <h4 className=" faq-title">Description</h4>
          <Row>
            <Col md="12">
              <p>{data?.package_description}</p>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId={2}>
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

export default PaymentDetails;
