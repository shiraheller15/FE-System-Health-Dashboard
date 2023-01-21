import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
} from "@mui/material";
import {
  getAllBranchesNamesFromServer,
  getAllProductsNamesFromServer,
  getAllServicesNamesFromServer,
} from "../../../api/filtersInDashboardApi";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
  setSelectedBranchName,
  setSelectedCategory,
  setSelectedFromDate,
  setSelectedProductName,
  setSelectedServiceName,
  setSelectedToDate,
} from "../../../redux/thunks/filtersInDashboardThunks";
import { IFilterDashBoard } from "../../../types/types";
import { theme, useStyles } from "./ScannersFilters.style";
import {
  DesktopDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { toDate } from "date-fns";
export const ScannersFilters: React.FC = () => {
  const namesCategories: string[] = [
    "All Categories",
    "SECURITY",
    "TEST REPORT",
    "CODE ANALYZER",
  ];
  const [filtersDropList, setFiltersDropList] = useState({
    productNameDropList: [],
    serviceNameDropList: [],
    branchNameDropList: [],
    rangeOfDatesDropList: [],
    categoryDropList: [],
  });
  const filter: IFilterDashBoard = useAppSelector(
    (state) => state.filtersInDashBoradReducer
  );
  const dispatch = useAppDispatch();
  const classes = useStyles();
  useEffect(() => {
    getAllProductsNamesFromServer().then((res) => {
      setFiltersDropList({
        ...filtersDropList,
        productNameDropList: res.data as [],
      });
    });
  }, []);
  const formatDate = (date: Date): string => {
    const year = date.toLocaleString("default", { year: "numeric" });
    const month = date.toLocaleString("default", { month: "2-digit" });
    const day = date.toLocaleString("default", { day: "2-digit" });
    return `${year}-${month}-${day}`;
  };
  const handleStartDateChange = (newDate: Date | null) => {
    if (newDate) {
      dispatch(setSelectedFromDate(formatDate(newDate)));
    }
  };
  const handleEndDateChange = (newDate: Date | null) => {
    if (newDate) {
      dispatch(setSelectedToDate(formatDate(newDate)));
    }
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box className={classes.box}>
          <FormControl className={classes.formControl}>
            <InputLabel className={classes.inputLabel} role={"productName"}>
              Product Name
            </InputLabel>
            <Select
              className={classes.productButton}
              value={
                filtersDropList.productNameDropList.length
                  ? filter.productName
                  : ""
              }
              label="Product Name"
              onChange={(event) => {
                dispatch(setSelectedProductName(event.target.value));
                dispatch(setSelectedServiceName(""));
                dispatch(setSelectedBranchName(""));
                getAllServicesNamesFromServer(event.target.value).then((res) =>
                  setFiltersDropList({
                    ...filtersDropList,
                    serviceNameDropList: res.data as [],
                  })
                );
              }}
            >
              {filtersDropList.productNameDropList.map(
                (productName: string, index: number) => (
                  <MenuItem key={index} value={productName}>
                    {productName}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
          <FormControl
            className={classes.formControl}
            disabled={filter.productName === ""}
          >
            <InputLabel className={classes.inputLabel}>Service Name</InputLabel>
            <Select
              className={classes.servicesButton}
              value={
                filtersDropList.serviceNameDropList.length
                  ? filter.serviceName
                  : ""
              }
              label="service Name"
              onChange={(event) => {
                dispatch(setSelectedServiceName(event.target.value));
                dispatch(setSelectedBranchName(""));
                getAllBranchesNamesFromServer(
                  filter.productName,
                  event.target.value
                ).then((res) =>
                  setFiltersDropList({
                    ...filtersDropList,
                    branchNameDropList: res.data as [],
                  })
                );
              }}
            >
              {filter.productName &&
                filtersDropList.serviceNameDropList &&
                filtersDropList.serviceNameDropList.map(
                  (serviceName: string, index: number) => (
                    <MenuItem key={index} value={serviceName}>
                      {serviceName}
                    </MenuItem>
                  )
                )}
            </Select>
          </FormControl>
          <FormControl
            className={classes.formControl}
            disabled={filter.serviceName === ""}
          >
            <InputLabel className={classes.inputLabel}>Branch Name</InputLabel>
            <Select
              className={classes.branchButton}
              value={
                filtersDropList.branchNameDropList.length
                  ? filter.branchName
                  : ""
              }
              label="Branch Name"
              onChange={(event) => {
                dispatch(setSelectedBranchName(event.target.value));
              }}
            >
              {filter.serviceName &&
                filtersDropList.branchNameDropList &&
                filtersDropList.branchNameDropList.map(
                  (branchName: string, index: number) => (
                    <MenuItem key={index} value={branchName}>
                      {branchName}
                    </MenuItem>
                  )
                )}
            </Select>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              className={classes.fromDate}
              label="start-date"
              inputFormat="dd/MM/yyyy"
              value={filter.fromDate}
              maxDate={new Date(Date.now())}
              onChange={handleStartDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
            <DesktopDatePicker
              className={classes.toDate}
              label="end-date"
              inputFormat="dd/MM/yyyy"
              value={filter.toDate}
              minDate={new Date(filter.fromDate)}
              maxDate={new Date(Date.now())}
              onChange={handleEndDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <FormControl className={classes.formControl}>
            <InputLabel className={classes.inputLabel}>
              All Categories
            </InputLabel>
            <Select
              className={classes.category}
              value={
                filter.scannerType === ""
                  ? "All Categories"
                  : filter.scannerType
              }
              label="category Name"
              onChange={(event) => {
                event.target.value === "All Categories"
                  ? dispatch(setSelectedCategory(""))
                  : dispatch(setSelectedCategory(event.target.value));
              }}
            >
              {namesCategories &&
                namesCategories.map((option: string, index: number) => (
                  <MenuItem value={option} key={index}>
                    {option}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>
      </ThemeProvider>
    </>
  );
};
