import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFilterDashBoard } from "../../types/types";

const formatDate = (date: Date): string => {
  var year = date.toLocaleString("default", { year: "numeric" });
  var month = date.toLocaleString("default", { month: "2-digit" });
  var day = date.toLocaleString("default", { day: "2-digit" });
  return `${year}-${month}-${day}`;
};

const _currnetDate = new Date();
const initialState: IFilterDashBoard = {
  productName: "",
  serviceName: "",
  branchName: "",
  fromDate: formatDate(
    new Date(
      _currnetDate.getFullYear() - 2,
      _currnetDate.getMonth(),
      _currnetDate.getDate()
    )
  ),
  toDate: formatDate(new Date()),
  scannerType: "",
};

export const filtersInDashBoradSlice = createSlice({
  name: "filtersInDashBoradReducer",
  initialState,
  reducers: {
    setProductName: (state, action: PayloadAction<string>) => {
      state.productName = action.payload;
    },
    setServiceName: (state, action: PayloadAction<string>) => {
      state.serviceName = action.payload;
    },
    setBranchName: (state, action: PayloadAction<string>) => {
      state.branchName = action.payload;
    },
    setFromDate: (state, action: PayloadAction<string>) => {
      state.fromDate = action.payload;
    },
    setToDate: (state, action: PayloadAction<string>) => {
      state.toDate = action.payload;
    },
    setScannerType: (state, action: PayloadAction<string>) => {
      state.scannerType = action.payload;
    },
  },
});

export const {
  setProductName,
  setServiceName,
  setBranchName,
  setFromDate,
  setToDate,
  setScannerType,
} = filtersInDashBoradSlice.actions;

export default filtersInDashBoradSlice.reducer;
