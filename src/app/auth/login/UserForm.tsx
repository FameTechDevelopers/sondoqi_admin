import {
  EmailAddressLogIn,
  Password,
  SignIn,
  SignInToAccount,
} from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import imageOne from "../../../../public/assets/images/logo/logo.png";
import imageTwo from "../../../../public/assets/images/logo/logo-white.png";
import axios from "axios";

export const UserForm = () => {
  const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const formSubmitHandle = async () => {
    try {
      const params = {
        user_email: email,
        user_password: password,
      };
      const response = await axios.post(`${BASE_URL}/users/login`, params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true,
      });

      localStorage.setItem("token", response?.data?.token);

      Cookies.set("nAwlyWwf", response?.data?.token, {
        path: "/",
        expires: new Date(Date.now() + 1000 * 86400),
        secure: false,
        // sameSite: "strict",
      });

      Cookies.set("m_token", JSON.stringify(true));

      window.location.reload();
      if (response?.data?.token) {
        toast.success("Successfully Loggedin");
      }
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || "Please Enter Valid Email Or Password"
      );

      // alert("Please Enter Valid Email Or Password");
      console.error("Login failed", error);
    }
  };

  return (
    <div>
      <div>
        <Link
          className="logo"
          href={`/${i18LangStatus}/dashboard/default_dashboard`}
        >
          <img
            className="img-fluid for-light"
            src={imageOne.src}
            alt="login page"
            width={200}
          />
          <img
            className="img-fluid for-dark"
            src={imageTwo.src}
            alt="login page"
            width={200}
          />
        </Link>
      </div>
      <div className="login-main">
        <Form className="theme-form">
          <h4>{SignInToAccount}</h4>
          <p>Enter your email & password to login</p>
          <FormGroup>
            <Label className="col-form-label">{EmailAddressLogIn}</Label>
            <Input
              type="email"
              defaultValue={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="test@gmail.com"
            />
          </FormGroup>
          <FormGroup>
            <Label className="col-form-label">{Password}</Label>
            <div className="position-relative">
              <Input
                type={show ? "text" : "password"}
                defaultValue={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Test@123"
              />
              <div className="show-hide" onClick={() => setShow(!show)}>
                <span className="show"> </span>
              </div>
            </div>
          </FormGroup>
          <FormGroup className="mb-0">
            <div className="text-end mt-3">
              <Button
                color="primary"
                block
                className="w-100"
                onClick={formSubmitHandle}
              >
                {SignIn}
              </Button>
            </div>
          </FormGroup>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
};
