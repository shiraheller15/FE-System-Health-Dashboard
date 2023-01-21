import axios from "axios";
import { GET_SCANNERS_URL } from "../config/config";
import {
  IScannerGraph,
  IScannerUnifiedFormat,
  IReport,
} from "../types/types";

export const getAllScannersFromServer = async () => {
  return axios.get<IScannerUnifiedFormat[]>(GET_SCANNERS_URL);
};

export const getScannersByFilterFromServer = async (
  fromDate: string,
  toDate: string,
  scannerType: string,
  productName: string,
  serviceName: string,
  branchName: string
) => {
  return axios.get<IScannerGraph>(
    `${GET_SCANNERS_URL}/graphs-data?fromDate=${fromDate}&toDate=${toDate}&scannerType=${scannerType}&productName=${productName}&serviceName=${serviceName}&branchName=${branchName}`
  );
};
export const getScannerByIdFromServer = async (id: string) => {
  return axios.get<IScannerUnifiedFormat>(`${GET_SCANNERS_URL}/${id}`);
};

export const getScannersFromServerWithPagination = async (
  pageNumber: number,
  scannerName: string,
  productName: string
) => {
  return axios.get<IScannerUnifiedFormat[]>(GET_SCANNERS_URL, {
    params: { pageNumber, scannerName, productName },
  });
};
export const getAllProductNames = async () => {
  return await axios.get<string[]>(`${GET_SCANNERS_URL}/products-names`);
};

export const getFilteredMicroserviceNames = async (
  productName: string,
  scannerName?: string
) => {
  return await axios.get<string[]>(`${GET_SCANNERS_URL}/microservices-names`, {
    params: { productName, scannerName },
  });
};

export const getFilteredBranchNames = async (
  productName: string,
  microserviceNme: string,
  scannerName?: string
) => {
  return await axios.get<string[]>(
    `${GET_SCANNERS_URL}/versions?productName=${productName}&microserviceName=${microserviceNme}&scannerName=${scannerName}`
  );
};

export const getFilteredReports = async (
  productName: string,
  microserviceNme: string,
  branch: string,
  scannerName?: string
) => {
  return await axios.get<IReport[]>(
    `${GET_SCANNERS_URL}/reports?productName=${productName}&microserviceName=${microserviceNme}&version=${branch}&scannerName=${scannerName}`
  );
};
export const getScannersNames = async () => {
  return await axios.get<string[]>(`${GET_SCANNERS_URL}/scanners-names`);
};
