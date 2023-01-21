export interface ILogInDetails {
  userName: string;
  password: string;
}
export type TSeverity = "LOW" | "MEDIUM" | "HIGH";
export type IStatus = "Failed" | "Passed" | "Skipped";
export interface ITestInterface {
  customizedFields?: Map<string, string>;
  id?: string;
  description: string;
  severity: TSeverity;
  status: IStatus;
}
export interface IScannerUnifiedFormat {
  id?: string;
  buildNumber?: string;
  productName?: string;
  testName?: string;
  microserviceName?: string;
  version?: string;
  scannerName: string;
  executionDate?: Date;
  numberOfScans?: number;
  numberOfRisksHigh?: number;
  numberOfRisksLow?: number;
  numberOfRisksMedium?: number;
  numberOfSuccessfulScans?: number;
  listOfTests?: Array<ITestInterface>;
  customizedFields?: Map<string, string>;
}
export interface IFilter {
  scannerName: string;
  productName: string;
}
export interface IFilterDashBoard {
  productName: string;
  serviceName: string;
  branchName: string;
  fromDate: string;
  toDate: string;
  scannerType: string;
}
export interface IFilterLeft {
  productName: string;
  microservicName: string;
  branch: string;
  report: string;
}
export interface IFilterRight {
  productName: string;
  microserviceName: string;
  branch: string;
  report: string;
}
export interface ISelectButtons {
  productsDropList: string[];
  microservicesDropList: string[];
  branchesDropList: string[];
  reportsDropList: IReport[];
}
export interface ISelectButtonsRight {
  branchesDropList: string[];
  reportsDropList: IReport[];
}
export interface IReport {
  id: string;
  buildNumber: string;
}
export interface IScannerDetails {
  id: String;
  buildNumber: number;
  executionDate: Date;
  numberOfRisksHigh: number;
  numberOfSuccessfulScans: number;
  numberOfWarnings: number;
  scannerType: string;
}
export interface IScannerGraph {
  [scannerName: string]: IScannerDetails[];
}
export interface IFilterState {
  productName: string;
  serviceName: string;
  branchName: string;
  rangeOfDates: Date;
  category: string;
}
export interface IProps {
  data?: IScannerDetails[];
  allScannersGraph?: IScannerGraph;
  width?: number;
  scannerName: string;
  icon?: string;
  sum?: number;
  scannerType?: string;
  statusFilter?: any;
}
