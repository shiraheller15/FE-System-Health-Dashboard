import axios from "axios";
import { GET_SCANNERS_URL } from "../config/config";

export const getAllProductsNamesFromServer = async () => {
  return axios.get<string[]>(`${GET_SCANNERS_URL}/products-names`);
};
export const getAllServicesNamesFromServer = async (productName: string) => {
  return axios.get<string[]>(`${GET_SCANNERS_URL}/microservices-names`, {
    params: { productName },
  });
};
export const getAllBranchesNamesFromServer = async (
  productName: string,
  microserviceName: string
) => {
  return axios.get<string[]>(
    `${GET_SCANNERS_URL}/versions?productName=${productName}&microserviceName=${microserviceName}`
  );
};
