import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import {
  IFilterLeft,
  ISelectButtons,
  IScannerUnifiedFormat,
  IReport,
} from "../../../types/types";
import useStyles from "./LeftSide.style";
import {
  getScannerByIdFromServer,
  getAllProductNames,
  getFilteredMicroserviceNames,
  getFilteredBranchNames,
  getFilteredReports,
} from "../../../api/scannersApi";

export const LeftSide = (props: {
  setDisplayLeftTable: Function;
  setDisplayComparison: Function;
  setScannerById: Function;
  setRightDropLists: Function;
  setRightFilter: Function;
  scannerName: string;
  scannerById: IScannerUnifiedFormat | undefined;
}) => {
  const classes = useStyles();

  const [filter, setFilter] = useState<IFilterLeft>({
    productName: props.scannerById?.productName || "",
    microservicName: props.scannerById?.microserviceName || "",
    branch: props.scannerById?.version || "",
    report: props.scannerById?.id || "",
  });
  const [selectButtonOptions, setSelectButtonOptions] =
    useState<ISelectButtons>({
      productsDropList: [],
      microservicesDropList: [],
      branchesDropList: [],
      reportsDropList: [],
    });

  useEffect(() => {
    getAllProductNames().then((res) =>
      setSelectButtonOptions({
        ...selectButtonOptions,
        productsDropList: res.data,
      })
    );
  }, []);

  useEffect(() => {
    const func = async () => {
      if (props.scannerById) {
        const [microservices, branches, reports] = await Promise.all([
          getFilteredMicroserviceNames(
            props.scannerById?.productName || "",
            props.scannerName
          ),
          getFilteredBranchNames(
            props.scannerById?.productName || "",
            props.scannerById?.microserviceName || "",
            props.scannerName
          ),
          getFilteredReports(
            props.scannerById?.productName || "",
            props.scannerById?.microserviceName || "",
            props.scannerById?.version || "",
            props.scannerName
          ),
        ]);

        setSelectButtonOptions({
          ...selectButtonOptions,
          microservicesDropList: microservices.data,
          branchesDropList: branches.data,
          reportsDropList: reports.data,
        });
      }
    };
    func();
  }, [props.scannerById, props.scannerName]);

  useEffect(() => {
    setFilter({
      ...filter,
      productName: props.scannerById?.productName || "",
      microservicName: props.scannerById?.microserviceName || "",
      branch: props.scannerById?.version || "",
      report: props.scannerById?.id || "",
    });
  }, [props.scannerById, props.scannerName]);

  useEffect(() => {
    if (filter.productName !== "")
      getFilteredMicroserviceNames(filter.productName, props.scannerName).then(
        (res) => {
          setSelectButtonOptions({
            ...selectButtonOptions,
            microservicesDropList: res.data,
            branchesDropList: [],
            reportsDropList: [],
          });
        }
      );
  }, [filter.productName]);

  useEffect(() => {
    if (filter.microservicName !== "")
      getFilteredBranchNames(
        filter.productName,
        filter.microservicName,
        props.scannerName
      ).then((res) => {
        setSelectButtonOptions({
          ...selectButtonOptions,
          branchesDropList: res.data,
          reportsDropList: [],
        });

        props.setRightDropLists({
          branchesDropList: res.data,
          reportsDropList: [],
        });
      });
    props.setRightFilter({
      productName: filter.productName,
      microserviceName: filter.microservicName,
      branch: "",
      report: [],
    });
  }, [filter.microservicName]);

  useEffect(() => {
    if (filter.branch !== "")
      getFilteredReports(
        filter.productName,
        filter.microservicName,
        filter.branch,
        props.scannerName
      ).then((res) => {
        setSelectButtonOptions({
          ...selectButtonOptions,
          reportsDropList: res.data as IReport[],
        });
      });
  }, [filter.branch]);

  useEffect(() => {
    if (filter.report !== "") {
      getScannerByIdFromServer(filter.report).then((res) => {
        props.setScannerById(res.data);
      });
      props.setDisplayLeftTable(true);
    }
  }, [filter.report]);

  return (
    <Box className={classes.box}>
      <FormControl className={classes.formControl} fullWidth>
        <InputLabel className={classes.inputLable} style={{ color: "white" }}>
          Product Name
        </InputLabel>
        <Select
          style={{ color: "white" }}
          className={classes.productName}
          value={selectButtonOptions.productsDropList.length?filter.productName:""}
          disabled={false}
          onChange={(event) => {
            setFilter({
              ...filter,
              productName: event.target.value as string,
              microservicName: "",
              branch: "",
              report: "",
            });
            props.setDisplayLeftTable(false);
          }}
        >
          {selectButtonOptions.productsDropList?.map((productName, index) => {
            return (
              <MenuItem value={productName} key={index}>
                {productName}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel className={classes.inputLable} style={{ color: "white" }}>
          Service Name
        </InputLabel>
        <Select
          sx={{ color: "white" }}
          className={classes.microserviceName}
          value={selectButtonOptions.microservicesDropList.length?filter.microservicName:""}
          disabled={filter.productName === ""}
          onChange={(event) => {
            setFilter({
              ...filter,
              microservicName: event.target.value as string,
              branch: "",
              report: "",
            });

            props.setDisplayLeftTable(false);
          }}
        >
          {selectButtonOptions.microservicesDropList?.map(
            (microserviceName, index) => {
              return (
                <MenuItem value={microserviceName} key={index}>
                  {microserviceName}
                </MenuItem>
              );
            }
          )}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel className={classes.inputLable} style={{ color: "white" }}>
          Branch name
        </InputLabel>
        <Select
          sx={{ color: "white" }}
          className={classes.branch}
          value={selectButtonOptions.branchesDropList.length?filter.branch:""}
          disabled={filter.microservicName === ""}
          onChange={(event) => {
            setFilter({
              ...filter,
              branch: event.target.value as string,
              report: "",
            });

            props.setDisplayLeftTable(false);
          }}
        >
          {selectButtonOptions.branchesDropList?.map((branchName, index) => {
            return (
              <MenuItem value={branchName} key={index}>
                {branchName}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel className={classes.inputLable} style={{ color: "white" }}>
          Report
        </InputLabel>
        <Select
          sx={{ color: "white" }}
          className={classes.report}
          value={selectButtonOptions.reportsDropList.length?filter.report:""}
          disabled={filter.branch === ""}
          onChange={(event) => {
            setFilter({ ...filter, report: event.target.value as string });
          }}
        >
          {selectButtonOptions.reportsDropList?.map((reportName, index) => {
            return (
              <MenuItem value={reportName.id} key={index}>
                {reportName.buildNumber}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Button
        fullWidth
        style={{ textTransform: "none" }}
        className={classes.goToReport}
        disabled={true}
        onClick={() => {}}
        variant="contained"
      >
        Go to report
      </Button>
    </Box>
  );
};
