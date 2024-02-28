import { ChangeEvent, ReactNode } from "react";

interface HeadDataProp {
  id: number;
  head: string;
}

export interface CommonTableProp {
  tableClass?: string;
  strip?: boolean;
  caption?: string;
  size?: string;
  hover?: boolean;
  headClass?: string;
  headRowClass?: string;
  headData: HeadDataProp[];
  children: ReactNode;
}

interface DetailsTableProp {
  text?: string;
  code?: string;
}

interface DataTableProp {
  title: string;
  tdClassName?: string;
  tableColData?: JSX.Element;
  details: DetailsTableProp[];
}

export interface CommonTableComponentProp {
  title: string;
  tableClass?: string;
  tdClassName?: string;
  tableColData?: JSX.Element;
  data: DataTableProp[];
}

export interface TableActionType {
  id: string;
}

export interface ZeroConfigurationTableColumnsType {
  id: number;
  name: string;
  position: string;
  office: string;
  age: number;
  startDate: string;
  salary: string;
  action: string;
}

export interface TableActionTypes {
  id: string;
}

export interface CustomCellInterFace {
  position: string;
  color: string;
}

export interface StateSavingTableDataType {
  id: number;
  name: string;
  position: string;
  color: string;
  office: string;
  age: string;
  startDate: string;
  salary: string;
  action: string;
}

export interface ScrollImageType {
  image: string;
  title: string;
}

export interface ScrollVerticalType {
  name: string;
  title: string;
  position: string;
  office: string;
  age: string;
  startDate: string;
  salary: string;
  action: string;
}

export interface StockResultTableData {
  name: string;
  symbol: string;
  price: string;
  difference: JSX.Element;
  last: JSX.Element;
}

export interface CustomCellInterFaceProp {
  value: number;
}

export interface RowCreateCallBackData {
  name: string;
  email: string;
  experience: string;
  sex: string;
  contactNumber: string;
  salary: number;
}

export interface AddRowsTable {
  column1: number;
  column2: number;
  column3: number;
  column4: number;
  column5: number;
}

export interface CustomExpandableComponentProp {
  data: {
    id: number;
    name: string;
    position: string;
    office: string;
    age: number;
    startDate: string;
    salary: string;
    action: string;
  };
}

export interface DeleteRowData {
  name: string;
  id: number;
  job: string;
  companyName: string;
  invoiceNumber: string;
  credit: JSX.Element;
  date: string;
  priority: ReactNode;
  budget: string;
  action: JSX.Element;
}

export interface DeleteRowDataProp {
  name: JSX.Element;
  position: string;
  office: string;
  age: number;
  startDate: string;
  salary: string;
}

export interface TableSearchBarPropsType {
  handleMinAgeChange: (eve: ChangeEvent<HTMLInputElement>) => void;
  handleMaxAgeChange: (eve: ChangeEvent<HTMLInputElement>) => void;
}

export interface CustomCellInterFaces {
  position: string;
  color: string;
}

export interface Opportunity {
  package_name: string;
  package_risk_level: string;
  package_description: string;
  package_remaining: number;
  package_target: number;
  package_unit: number;
  contribution_no: number;
  _id: string;
}
export interface Payment {
  user_id: string;
  paymenttype_name: string;
  package_remaining: number;
  package_target: number;
  package_unit: number;
  contribution_no: number;
  transaction_amount: number;
  payment_date: number;
  transectiontype_name: string;

  _id: string;
  user: {
    user_name: string;
    user_email: string;
    user_phone: string;
  };
  package: {
    package_name: string;
    package_box_type: string;
    package_risk_level: string;
  };
}

export interface User {
  user_phone: number;
  user_cnic: number;
  wallet_balance: number;
  commercial_registration_no: number;
  user_name: string;
  user_position: string;
  role_name: string;
  user_salary: string;
  enrollment_type: string;
  user_cv: JSX.Element;
  user_email: string;
  user_color: string;
  user_badge: string;
  _id: string;
}

export interface AjaxSourcedColumnsInterface {
  name: string;
  position: string;
  office: string;
  date: string;
  extends: string;
  salary: string;
}

export interface ServerSideProcessingColumnsInterface {
  name: string;
  position: string;
  office: string;
  lastName: string;
  date: string;
  salary: string;
}
