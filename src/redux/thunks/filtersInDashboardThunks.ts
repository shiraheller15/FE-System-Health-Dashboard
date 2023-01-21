import {
  setBranchName,
  setFromDate,
  setProductName,
  setServiceName,
  setToDate,
  setScannerType,
} from "../slices/filtersInDashBoradSlice";
import { AppDispatch } from "../store";

export const setSelectedProductName = (productName: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(setProductName(productName));
  };
};
export const setSelectedServiceName = (serviceName: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(setServiceName(serviceName));
  };
};
export const setSelectedBranchName = (branchName: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(setBranchName(branchName));
  };
};
export const setSelectedFromDate = (fromDate: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(setFromDate(fromDate));
  };
};
export const setSelectedToDate = (toDate: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(setToDate(toDate));
  };
};
export const setSelectedCategory = (category: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(setScannerType(category));
  };
};
