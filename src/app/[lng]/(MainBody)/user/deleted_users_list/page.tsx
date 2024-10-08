"use client";
import { Button, Card, CardBody, Col, Input, Label } from "reactstrap";
import DataTable, { TableColumn } from "react-data-table-component";
import axios from "axios";
import { useQuery } from "react-query";
import { HtmlTableTittle, SearchTableButton } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HtmlColumnData as HtmlColumnData } from "@/Data/Form&Table/Table/DataTable/DataSourceData";
import { useMemo, useState } from "react";
import PaginationDynamic from "@/utils/Paginations";
import Loading from "@/app/loading";
import CommonModal from "@/Components/UiKits/Modal/Common/CommonModal";
import { Close } from "@/Constant";
import { User } from "@/Types/TableType";
import SinglePost from "@/Components/DetailModal/SinglePost";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/Redux/Hooks";
import NewCarDetials from "@/Components/DetailModal/SingleOppertunity";
import SingleOppertunity from "@/Components/DetailModal/SingleOppertunity";
import SingleUser from "@/Components/DetailModal/SingleUser";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const DeletedUsersList = () => {
  const { user } = useAppSelector((state) => state.user);

  const { i18LangStatus } = useAppSelector((state) => state.langSlice);
  const router = useRouter();

  const [filterText, setFilterText] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [postId, setPostId] = useState<any>(null);
  const [detailModal, setDetailModal] = useState(false);
  const [getUpdate, setGetUpdate] = useState(false);

  const detailsToggle = (id: string) => {
    setPostId(id);
    return setDetailModal(!detailModal);
    // router.push(`/${i18LangStatus}/new_car/newcarpostdetails?id=${id}`);
  };

  const closeDetailModal = () => {
    detailsToggle(postId); // Call forwardToggle with the necessary argument (postId)
  };

  const openDetails = () => {
    router.push(`/${i18LangStatus}/user/userdetails?id=${postId}`);
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/users/getDeletedUsersList`,
        {
          // params: {
          //   page,
          // },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          withCredentials: true,
        }
      );
      setTotal(response?.data?.last_page);
      return response?.data?.users;
    } catch (error) {
      console.log(error);
    }
  };

  const {
    data: users,
    error,
    isLoading,
  } = useQuery(`deletedUsersList_${page}${getUpdate}`, fetchData);

  const filteredItems = users?.filter((item: any) => {
    const lowerCaseFilterText = filterText.toLowerCase();

    return (
      (item?.role_name &&
        item?.role_name.toLowerCase().includes(lowerCaseFilterText)) ||
      (item?.user_name &&
        item?.user_name.toLowerCase().includes(lowerCaseFilterText)) ||
      (item?.user_email &&
        item?.user_email.toLowerCase().includes(lowerCaseFilterText)) ||
      (item?.user_phone &&
        item?.user_phone.toString().includes(lowerCaseFilterText))
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

  const PostsColumn: TableColumn<User>[] = [
    {
      name: "Name",
      selector: (row) => row.user_name,
    },

    {
      name: "Email",

      selector: (row) => row.user_email,
    },

    {
      name: "Phone",
      selector: (row) => row.user_phone,
    },

    {
      name: "Role",
      selector: (row) => row.role_name,
    },
    {
      name: "Type",
      selector: (row) => row.enrollment_type,
    },
    {
      name: "Wallet Balance",
      selector: (row) => row.wallet_balance,
    },
    {
      name: "Commercial Registration No",
      selector: (row) => row.commercial_registration_no,
    },

    {
      name: "Action",
      cell: (row) => {
        return (
          <ul
            className="action simple-list d-flex flex-row gap-2"
            key={row?._id}
          >
            <li className="edit">
              <button
                className="p-0 border-0 bg-transparent"
                onClick={() => handleActive(row?._id)}
              >
                <i className="icofont icofont-check" />
              </button>
            </li>

            <li className="view">
              <button
                className="p-0 border-0 bg-transparent"
                onClick={() => {
                  detailsToggle(row?._id);
                }}
              >
                <i className="icon-eye link-primary" />
              </button>
            </li>
          </ul>
        );
      },
    },
  ];

  const handleActive = async (id: string) => {
    try {
      const response = await axios.get(`${BASE_URL}/users/activeUser`, {
        params: {
          user_id: id,
          loggedinuser_id: user?._id,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true,
      });
      toast.success(response?.data?.message || "Deleted Succeffully");
      setGetUpdate(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Col sm="12">
      <Card className="basic-data-table">
        {isLoading ? (
          <Loading />
        ) : (
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
            <PaginationDynamic
              totalPages={total}
              currentPage={page}
              setCurrentPage={setPage}
            />
          </CardBody>
        )}
      </Card>

      <CommonModal
        centered
        isOpen={detailModal}
        toggle={closeDetailModal}
        size="lg"
      >
        <div className="modal-toggle-wrapper">
          <SingleUser id={postId} />
          <div className=" d-flex align-items-center pt-2">
            <Button
              color="secondary"
              className="d-flex m-auto"
              onClick={closeDetailModal}
            >
              {Close}
            </Button>
            <Button
              color="secondary"
              className="d-flex m-auto"
              onClick={openDetails}
            >
              {"View More"}
            </Button>
          </div>
        </div>
      </CommonModal>
    </Col>
  );
};

export default DeletedUsersList;
