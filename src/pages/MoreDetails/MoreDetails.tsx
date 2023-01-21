import { Button, Grid, MenuItem,
  Select, } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getScannerByIdFromServer,getScannersNames } from "../../api/scannersApi";
import { LeftSide } from "./LeftSide/LeftSide";
import TestListTable from "./Table/TestListTable";
import { RightSide } from "./RightSide/RightSide";
import {
  IScannerUnifiedFormat,
  IFilterRight,
  ITestInterface,
  ISelectButtonsRight,
} from "../../types/types";
import { useStyles } from "./MoreDetails.style";
import Comparsion from "./Comparison/Comparsion";
import dellLogo from "../../icons/dellLogo.jpg";

export const MoreDetails = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [scannerById, setScannerById] = useState<IScannerUnifiedFormat>();
  const [scannerByIdToCompare, setScannerByIdToCompare] =
    useState<IScannerUnifiedFormat>();
  const [displayComparison, setDisplayComparison] = useState(false);
  const[displayLeftTable,setDisplayLeftTable]=useState(true)
  const [countOfTest, setCountOfTest] = useState({ eq: 0, all: 0, dif: 0 });
  const [compareStatus, setCompareStatus] = useState("All");
  const [scannerName, setScannerName] = useState<string>("");
  const [scannersNamesList, setScannersNamesList] = useState<string[]>();
  const [equalTestArray, setEqualTestArray] = useState<
    Array<ITestInterface | null>
  >([]);
  const [differentRightTestArray, setDifferentRightTestArray] = useState<
    Array<ITestInterface | null>
  >([]);
  const [differentLeftTestArray, setDifferentLeftTestArray] = useState<
    Array<ITestInterface | null>
  >([]);

  const [rightFilter, setRightFilter] = useState<IFilterRight>({
    productName: "",
    microserviceName: "",
    branch: "",
    report: "",
  });
  const [rightDropLists, setRightDropLists] = useState<ISelectButtonsRight>({
    branchesDropList: [],
    reportsDropList: [],
  });
  useEffect(() => {
    const func = async () => {
      getScannerByIdFromServer(id || " ").then((res) => {
        setScannerById(res.data);
        setScannerName(res.data.scannerName);
      });
      getScannersNames().then((res)=>{
        setScannersNamesList(res.data);
       })
    };
    func();
  }, []);

  useEffect(() => {
    const handleComparison = () => {
    let mapScannersTests: {
      [key: string]: {
        left: ITestInterface | null;
        right: ITestInterface | null;
      };
    } = {};
    scannerById?.listOfTests?.forEach((test) => {
      mapScannersTests[test.description] = { left: test, right: null };
    });
    scannerByIdToCompare?.listOfTests?.forEach((test) => {
      mapScannersTests[test.description] = {
        left: mapScannersTests[test.description]?.left || null,
        right: test,
      };
    });
    let differenetRightTests: (ITestInterface | null)[] = [];
    let differenetLeftTests: (ITestInterface | null)[] = [];
    let equal: (ITestInterface | null)[] = [];
    for (let key in mapScannersTests) {
      let value = mapScannersTests[key];
      if (value.left?.status === value.right?.status) equal.push(value.left);
      else {
        differenetLeftTests.push(value.left);
        differenetRightTests.push(value.right);
      }
    }
    setEqualTestArray(equal);
    setDifferentLeftTestArray(differenetLeftTests);
    setDifferentRightTestArray(differenetRightTests);
    setCountOfTest({
      eq: equal.length,
      dif: differenetRightTests.length,
      all:
        (scannerById?.listOfTests?.length || 0) +
        (scannerByIdToCompare?.listOfTests?.length || 0),
    });
  };
    handleComparison();
    setCompareStatus("All");
  }, [scannerById, scannerByIdToCompare]);

  const generateRightList = (): Array<ITestInterface | null> | undefined => {
    switch (compareStatus) {
      case "All":
        let allTestArray: Array<ITestInterface | null> = equalTestArray.concat(
          differentRightTestArray
        );
        return allTestArray.length
          ? allTestArray
          : scannerByIdToCompare?.listOfTests;
      case "Different":
        return differentRightTestArray;
      case "Equal":
        return equalTestArray;
    }
  };
  const generateLeftList = (): Array<ITestInterface | null> | undefined => {
    switch (compareStatus) {
      case "All":
        let allTestArray: Array<ITestInterface | null> = equalTestArray.concat(
          differentLeftTestArray
        );
        return allTestArray.length ? allTestArray : scannerById?.listOfTests;
      case "Different":
        return differentLeftTestArray;
      case "Equal":
        return equalTestArray;
    }
  };
  const toggleIsLoading = () => {
    setDisplayComparison((current) => !current);
    setScannerByIdToCompare(undefined);
  };

  

  return (
    
      <div className={classes.bodyStyle}>
        <div className={classes.nav}>
          <img src={dellLogo} alt="logo" className={classes.logo}></img>
          <p className={classes.title}>{scannerName}</p>
        </div>
        <div style={{height:"6vh",textAlign:"end"}}>
        <Select
          sx={{ color: "white"}}
          className={classes.scannerName}
          value={scannersNamesList?.length?scannerName:""}
          onChange={(event) => {
            setScannerName(event.target.value);
            setScannerById(undefined);
            setScannerByIdToCompare(undefined);
            setDisplayLeftTable(false);
          }}
        >
        {scannersNamesList?.map((nameOfScanner, index) => { return <MenuItem value={nameOfScanner} key={index}>{nameOfScanner}</MenuItem> })}
        </Select>
      </div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={5}>
            <LeftSide
              setDisplayLeftTable={setDisplayLeftTable}
              setDisplayComparison={setDisplayComparison}
              setScannerById={setScannerById}
              setRightDropLists={setRightDropLists}
              setRightFilter={setRightFilter}
              scannerById={scannerById}
              scannerName={scannerName}
            ></LeftSide>
             <TestListTable listForTestLeft={generateLeftList()} listForTestRight={generateRightList()}
           scannerByIdToCompare={scannerByIdToCompare} displayLeftTable={displayLeftTable}
            ></TestListTable>
          </Grid>
          <Grid item xs={2}>
            <>
              <Button
                onClick={toggleIsLoading}
                variant="outlined"
                className={classes.button}
              >
                VS
              </Button>
              {displayComparison && scannerByIdToCompare && displayLeftTable &&(
                <Comparsion
                  setCompareStatus={setCompareStatus}
                  countOfTest={countOfTest}
                ></Comparsion>
              )}        
            </>
          </Grid>
          <Grid item xs={5}>
            {displayComparison && (
              <RightSide
                setScannerByIdToCompare={setScannerByIdToCompare}
                rightFilter={rightFilter}
                rightDropLists={rightDropLists}
                scannerName={scannerName}
              ></RightSide>
            )} 
          </Grid>       
        </Grid>
      </div>
    
  );
};
