"use client";
import { Col, FormGroup, Label, Row, Input, Button } from "reactstrap";
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
  const [description, setDescription] = useState("");
  const [boxType, setBoxType] = useState("");
  const [riskLevel, setRiskLevel] = useState("");
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
        package_description: description,
        package_risk_level: riskLevel,
        package_box_type: boxType,
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
      router.push(`/${i18LangStatus}/opportunities/open_opportunities_list`);
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

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>Opportunity Box Type</Label>
                <Input
                  required
                  name="package_box_type"
                  placeholder="Box Type"
                  onChange={(e: any) => setBoxType(e.target.value)}
                  value={boxType}
                  type="select"
                  className="form-control form-select"
                >
                  <option value="" disabled>
                    Select Type
                  </option>

                  <option value={"يفتح"}>يفتح</option>
                  <option value={"مغلق"}>مغلق</option>
                </Input>
              </FormGroup>
            </Col>
            <Col lg="3" md="6">
              <FormGroup>
                <Label check>Opportunity Risk Level</Label>
                <Input
                  required
                  name="package_risk_level"
                  placeholder="Risk Level"
                  onChange={(e: any) => setRiskLevel(e.target.value)}
                  value={riskLevel}
                  type="select"
                  className="form-control form-select"
                >
                  <option value="" disabled>
                    Select Risk Level
                  </option>

                  <option value={"قليل"}>قليل</option>
                  <option value={"متوازن"}>متوازن</option>
                  <option value={"عالي"}>عالي</option>
                </Input>
              </FormGroup>
            </Col>
            <Col lg="12" md="12">
              <FormGroup>
                <Label check>Opportunity Description</Label>
                <textarea
                  required
                  rows={5}
                  name="package_description"
                  className="form-control"
                  placeholder="Description"
                  onChange={(e: any) => setDescription(e.target.value)}
                  value={description}
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
