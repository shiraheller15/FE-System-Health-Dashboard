import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IFilterDashBoard, IScannerGraph } from "../../types/types";
import dellLogo from "../../icons/dellLogo.jpg";
import { useStyles } from "./Dashboard.styles";
import { ScannersFilters } from "./filters/ScannersFilters";
import { ScannersGraph } from "./ScannersGraph/ScannersGraph";
import { AllScannerGraph } from "./ScannersGraph/AllScannerGraph";
import ButtenFilter from "./ButtenFilter/ButtenFilter";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import axios from "axios";
import { getScannersByFilterFromServer } from "../../api/scannersApi";

export const Dashboard = () => {
  const Wrap = ({ children }: any) => <div>{children}</div>;
  const classes = useStyles();
  const navigate = useNavigate();
  const [count, setCount] = useState({
    All: 0,
    Passed: 0,
    Warning: 0,
    Failed: 0,
  });
  const [filterButten, setFilterButten] = useState({
    All: true,
    Passed: false,
    Warning: false,
    Failed: false,
  });

  const filters: IFilterDashBoard = useSelector<RootState, IFilterDashBoard>(
    (state) => state.filtersInDashBoradReducer
  );
  const [scanners, setScanners] = useState<IScannerGraph>();

  useEffect(() => {
    let sumPassed = 0;
    let sumWarning = 0;
    let sumFailed = 0;
    Object.entries(scanners ? scanners : {}).map(
      ([scannerName, scannerList]) => {
        scannerList.forEach((scanner) => {
          sumPassed += scanner.numberOfSuccessfulScans;
          sumWarning += scanner.numberOfWarnings;
          sumFailed += scanner.numberOfRisksHigh;
        });
      }
    );
    setCount({
      All: sumPassed + sumWarning + sumFailed,
      Passed: sumPassed,
      Warning: sumWarning,
      Failed: sumFailed,
    });
  }, [scanners]);

  useEffect(() => {
    const uuid = localStorage.getItem("uuid");
    !uuid && navigate("/login");
    getScannersByFilter();
  }, []);

  useEffect(() => {
    getScannersByFilter();
  }, [filters]);

  const getScannersByFilter = async () => {
    try {
      const scanners = await getScannersByFilterFromServer(
        filters.fromDate,
        filters.toDate,
        filters.scannerType,
        filters.productName,
        filters.serviceName,
        filters.branchName
      );
      setScanners(scanners.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  };
  return (
    <>
      <div className={classes.header}>
        <div className={classes.div}>
          <img src={dellLogo} alt="logo" className={classes.logo}></img>
        </div>
        <ButtenFilter
          changeFilter={setFilterButten}
          statusfilter={filterButten}
          count={count}
        ></ButtenFilter>
        <ScannersFilters />
      </div>
      <Wrap>
        <div className={classes.allGraf}>
          <>
            {scanners ? (
              <AllScannerGraph
                allScannersGraph={scanners}
                scannerName={"Overall System Health"}
                statusFilter={filterButten}
              />
            ) : (
              <></>
            )}
            {Object.entries(scanners ? scanners : {}).map(
              ([scannerName, scannerList]) => {
                return (
                  scannerList.length > 0 && (
                    <ScannersGraph
                      scannerType={scannerList[0].scannerType}
                      scannerName={scannerName}
                      sum={scannerList.length}
                      data={scannerList}
                      width={460}
                      key={scannerName}
                      statusFilter={filterButten}
                    />
                  )
                );
              }
            )}
          </>
        </div>
      </Wrap>
    </>
  );
};
