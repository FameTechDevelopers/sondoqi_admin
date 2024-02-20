"use client";
import { Col, FormGroup, Label, Row, Input, Button } from "reactstrap";
import {
  BootSpaceL,
  GroundClearenceMM,
  KerbWeightKG,
  NoOfDoors,
  OverallLengthMM,
  OverallWidthMM,
  WheelBaseMM,
} from "@/Constant";
import { useQuery } from "react-query";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { ButtonSection } from "./ButtonSection";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import Loading from "@/app/loading";
import { useAppSelector } from "@/Redux/Hooks";
import { useRouter } from "next/navigation";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const CreateNewOpportunity = () => {
  const router = useRouter();
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);

  const [submitting, setSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [target, setTarget] = useState("");
  const [remaining, setRemaining] = useState("");
  const [unit, setUnit] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setSubmitting(true);
    try {
      const params = {
        package_name: name,
        package_target: target,
        package_remaining: remaining,
        package_unit: unit,
      };
      const response = await axios.post(
        `${BASE_URL}/package/createPackage
          `,
        params,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          withCredentials: true,
        }
      );

      toast.success(response?.data?.message);
      // router.push(`/${i18LangStatus}/new_car/carpostlist`);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {submitting ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit}>
          <h1 className="faq-title">Investment Opportunity Information</h1>

          <Row>
            <Col lg="3" md="6">
              <FormGroup>
                <Label check>Opportunity Name</Label>
                <Input
                  required
                  name="package_name"
                  type="text"
                  className="form-control"
                  placeholder="Opportunity Name"
                  onChange={(e: any) => setName(e.target.value)}
                  value={name}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>Opportunity Target</Label>
                <Input
                  required
                  name="package_target"
                  type="number"
                  className="form-control"
                  placeholder="Opportunity Target"
                  onChange={(e: any) => setTarget(e.target.value)}
                  value={target}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>Opportunity Remaining</Label>
                <Input
                  required
                  name="package_remaining"
                  type="number"
                  className="form-control"
                  placeholder="Opportunity Remaining"
                  onChange={(e: any) => setRemaining(e.target.value)}
                  value={remaining}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>Opportunity Unit</Label>
                <Input
                  required
                  name="package_unit"
                  type="number"
                  className="form-control"
                  placeholder="Opportunity Unit"
                  onChange={(e: any) => setUnit(e.target.value)}
                  value={unit}
                />
              </FormGroup>
            </Col>
          </Row>

          <ButtonSection />
        </form>
      )}
    </>
  );
};

export default CreateNewOpportunity;
