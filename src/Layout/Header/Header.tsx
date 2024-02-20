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
      const Loginresponse = await axios.get(
        `${BASE_URL}/users/getLoginStatus`,

        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          withCredentials: true,
        }
      );

      if (Loginresponse?.data === true) {
        try {
          const token = localStorage.getItem("token");

          const response = await axios.get(`${BASE_URL}/users/getUser`, {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            withCredentials: true,
          });

          dispatch(setUser(response?.data?.user));
        } catch (error: any) {
          console.error("Failed to get User", error);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (
      user?.user_name === "" &&
      user?.user_email === "" &&
      user?.role_name === ""
    ) {
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
