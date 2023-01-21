import moment from "moment";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IProps, IScannerDetails } from "../../../types/types";
import useStyles from "./ScannerGraph.style";

export const AllScannerGraph = ({
  allScannersGraph,
  scannerName,
  statusFilter,
}: IProps) => {
  const classes = useStyles();
  const [allScanners, setAllScanners] = useState<IScannerDetails[]>();
  const [updateAllScanners, setUpdateAllScanners] = useState<boolean>();

  const navigate = useNavigate();
  useEffect(() => {
    if (allScanners) {
      allScanners.forEach((scanner) => {
        scanner.executionDate = new Date(scanner.executionDate);
      });
      const allScannersSort = [...allScanners].sort(
        (a: IScannerDetails, b: IScannerDetails) =>
          Number(b.executionDate) - Number(a.executionDate)
      );
      setAllScanners(allScannersSort);
    }
  }, [updateAllScanners]);
  useEffect(() => {
    const array: IScannerDetails[] = [];
    Object.values(allScannersGraph ? allScannersGraph : {}).map((scanner) => {
      if (scanner.length > 0) {
        array.push(...scanner);
      }
    });
    setAllScanners([...array]);
    setUpdateAllScanners(true);
  }, []);

  let lineChart: any;
  const handleClick = (): void => {
    navigate(
      "/more-details/" +
        lineChart.state.prevData[lineChart.state.activeTooltipIndex].id
    );
  };
  return (
    <Card className={classes.allScannersCard}>
      <Card.Header className={classes.header}>
        <div className={classes.headerCard}>
          <Card.Title className={classes.nameCard}>
            Total Service Scans
          </Card.Title>
          <Card.Text className={classes.sum}>{scannerName}</Card.Text>
        </div>
      </Card.Header>
      <Card.Body onClick={handleClick}>
        <AreaChart
          width={allScanners ? allScanners.length * 170 : 0}
          height={250}
          ref={(ref) => {
            lineChart = ref;
          }}
          data={allScanners ? allScanners : []}
          margin={{ top: 0, right: 30, left: 5, bottom: 40 }}
        >
          <defs>
            <linearGradient id="colorPassed" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00F2C3" stopOpacity={0.25} />
              <stop offset="50%" stopColor="#00F2C3" stopOpacity={0.005} />
            </linearGradient>
            <linearGradient id="colorFailed" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F5365C" stopOpacity={0.25} />
              <stop offset="50%" stopColor="#F5365C" stopOpacity={0.005} />
            </linearGradient>
            <linearGradient id="colorWarnings" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFF00" stopOpacity={0.25} />
              <stop offset="50%" stopColor="#FFFF00" stopOpacity={0.005} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="executionDate"
            axisLine={false}
            tickLine={false}
            tickCount={8}
            tickFormatter={(date) => {
              return moment(date).format("DD MMM, YYYY");
            }}
          />
          <YAxis axisLine={false} tickLine={false} tickCount={8} />
          <CartesianGrid vertical={false} opacity={0.04} />
          <Tooltip />
          {statusFilter.Passed === true || statusFilter.All === true ? (
            <Area
              type="monotone"
              dataKey="numberOfSuccessfulScans"
              stroke="#00F2C3"
              fill="url(#colorPassed)"
              activeDot={{
                onClick: () => {
                  handleClick();
                },
              }}
              dot={{ stroke: "#00F2C3", strokeWidth: 4, r: 2 }}
            />
          ) : (
            <></>
          )}
          {statusFilter.Failed === true || statusFilter.All === true ? (
            <Area
              color="#F5365C"
              type="monotone"
              dataKey="numberOfRisksHigh"
              stroke="#F5365C"
              fill="url(#colorFailed)"
              activeDot={{
                onClick: () => {
                  handleClick();
                },
              }}
              dot={{ stroke: "#F5365C", strokeWidth: 4, r: 2 }}
            />
          ) : (
            <></>
          )}
          {statusFilter.Warning === true || statusFilter.All === true ? (
            <Area
              color="#FFFF00"
              type="monotone"
              dataKey="numberOfWarnings"
              stroke="#FFFF00"
              fill="url(#colorWarnings)"
              activeDot={{
                onClick: () => {
                  handleClick();
                },
              }}
              dot={{ stroke: "#FFFF00", strokeWidth: 4, r: 2 }}
            />
          ) : (
            <></>
          )}
        </AreaChart>
      </Card.Body>
    </Card>
  );
};
