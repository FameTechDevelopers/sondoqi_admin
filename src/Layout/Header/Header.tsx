import { Row } from "reactstrap";
import { MobileView } from "./MobileView";
import { BreadCrumbs } from "./BreadCrumbs";
import { PageHeader } from "./PageHeader";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { headerResponsive } from "@/Redux/Reducers/LayoutSlice";
import axios from "axios";
import { setUser } from "@/Redux/Reducers/UserSlice";

export const Header = () => {
  const { toggleSidebar } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  const formSubmitHandle = async () => {
    const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

    try {
      const token = localStorage.getItem("authToken");

      const response = await axios.get(`${BASE_URL}/getUser`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(setUser(response?.data));
    } catch (error: any) {
      console.error("Failed to get User", error);
    }
  };

  useEffect(() => {
    if (user?.name === "" && user?.email === "" && user?.role === "") {
      formSubmitHandle();
    }

    dispatch(headerResponsive());
  }, []);

  return (
    <Row
      className={`page-header ${toggleSidebar ? "close_icon" : ""}`}
      id="page-header"
    >
      <MobileView />
      <BreadCrumbs />
      <PageHeader />
    </Row>
  );
};
