import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { useStyles } from "./TestListTable.style";
import { IScannerUnifiedFormat, ITestInterface } from "../../../types/types";
import { FaEquals, FaNotEqual } from "react-icons/fa";
export default function TestListTable(props: {
  listForTestLeft: Array<ITestInterface | null> | undefined;
  listForTestRight: Array<ITestInterface | null> | undefined;
  scannerByIdToCompare: IScannerUnifiedFormat | undefined;
  displayLeftTable: boolean;
}) {
  const classes = useStyles();

  return (
    <>
      <Table className={classes.table}>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell
              sx={{ color: "#FFFFFF" }}
              className={
                props.displayLeftTable
                  ? classes.indexTableCell
                  : classes.tableCellCompare
              }
            >
              #
            </TableCell>
            <TableCell
              sx={{ color: "#FFFFFF" }}
              className={
                props.displayLeftTable
                  ? classes.descriptionTableCell
                  : classes.tableCellCompare
              }
            >
              SCAN TITLE
            </TableCell>
            <TableCell
              sx={{ color: "#FFFFFF" }}
              className={
                props.displayLeftTable
                  ? classes.statusTableCell
                  : classes.tableCellCompare
              }
            >
              SCAN STATUS
            </TableCell>
            <TableCell
              sx={{ color: "#FFFFFF" }}
              className={
                props.displayLeftTable && props.scannerByIdToCompare
                  ? classes.compareCell
                  : classes.tableCellCompare
              }
            ></TableCell>
            <TableCell
              sx={{ color: "#FFFFFF" }}
              className={
                props.scannerByIdToCompare
                  ? classes.indexTableCell
                  : classes.tableCellCompare
              }
            >
              #
            </TableCell>
            <TableCell
              sx={{ color: "#FFFFFF" }}
              className={
                props.scannerByIdToCompare
                  ? classes.descriptionTableCell
                  : classes.tableCellCompare
              }
            >
              SCAN TITLE
            </TableCell>
            <TableCell
              sx={{ color: "#FFFFFF" }}
              className={
                props.scannerByIdToCompare
                  ? classes.statusTableCell
                  : classes.tableCellCompare
              }
            >
              SCAN STATUS
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listForTestLeft?.map(
            (test: ITestInterface | null, index: number) => (
              <TableRow
                key={"TableRowLeft" + index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className={classes.tableRow}
                style={{ height: "7.5vh" }}
              >
                <TableCell
                  key={"indexLeft" + index}
                  sx={
                    test?.status === "Passed"
                      ? { color: "#00F2C3" }
                      : test
                      ? { color: "#F5365C" }
                      : { color: "#FF8D72" }
                  }
                  className={
                    props.displayLeftTable
                      ? classes.indexTableCell
                      : classes.tableCellCompare
                  }
                >
                  {index + 1}
                </TableCell>
                <TableCell
                  key={"descriptionLeft" + index}
                  sx={
                    test?.status === "Passed"
                      ? { color: "#00F2C3" }
                      : { color: "#F5365C" }
                  }
                  className={
                    props.displayLeftTable
                      ? classes.descriptionTableCell
                      : classes.tableCellCompare
                  }
                >
                  {test?.description}
                </TableCell>
                <TableCell
                  key={"statusLeft" + index}
                  sx={{ color: "#FFFFFF" }}
                  className={
                    props.displayLeftTable
                      ? classes.statusTableCell
                      : classes.tableCellCompare
                  }
                >
                  {test?.status === "Passed" ? (
                    <div className={classes.passedStatusDiv}>
                      <CheckCircleIcon className={classes.icon} />
                      <div className={classes.status}>PASSED</div>
                    </div>
                  ) : test?.status === "Failed" ? (
                    <div className={classes.failedStatusDiv}>
                      <CancelIcon className={classes.icon} />
                      <div className={classes.status}>FAILED</div>
                    </div>
                  ) : (
                    <div className={classes.notMatch}>
                      <ReportProblemIcon className={classes.icon} />
                      <div className={classes.status}>NO MATCH</div>
                    </div>
                  )}
                </TableCell>

                <TableCell
                  key={"compare" + index}
                  className={
                    props.scannerByIdToCompare && props.displayLeftTable
                      ? classes.compareCell
                      : classes.tableCellCompare
                  }
                  style={{ textAlign: "center" }}
                >
                  {test?.status ===
                  (props.listForTestRight &&
                    props.listForTestRight[index]?.status) ? (
                    <div>
                      <FaEquals className={classes.equalIcon} />
                    </div>
                  ) : (
                    <div>
                      <FaNotEqual className={classes.notEqualIcon} />
                    </div>
                  )}
                </TableCell>
                <TableCell
                  key={"indexRight" + index}
                  sx={
                    props.listForTestRight &&
                    props.listForTestRight[index]?.status === "Passed"
                      ? { color: "#00F2C3" }
                      : props.listForTestRight &&
                      props.listForTestRight[index]
                      ? { color: "#F5365C" }
                      : { color: "#FF8D72" }
                  }
                  className={
                    props.scannerByIdToCompare
                      ? classes.indexTableCell
                      : classes.tableCellCompare
                  }
                >
                  {index + 1}
                </TableCell>
                <TableCell
                  key={"descriptionRight" + index}
                  sx={
                    props.listForTestRight &&
                    props.listForTestRight[index]?.status === "Passed"
                      ? { color: "#00F2C3" }
                      : { color: "#F5365C" }
                  }
                  className={
                    props.scannerByIdToCompare
                      ? classes.descriptionTableCell
                      : classes.tableCellCompare
                  }
                >
                  {props.listForTestRight &&
                    props.listForTestRight[index]?.description}
                </TableCell>
                <TableCell
                  key={"statusRight" + index}
                  sx={{ color: "#FFFFFF" }}
                  className={
                    props.scannerByIdToCompare
                      ? classes.statusTableCell
                      : classes.tableCellCompare
                  }
                >
                  {props.listForTestRight &&
                  props.listForTestRight[index]?.status === "Passed" ? (
                    <div className={classes.passedStatusDiv}>
                      <CheckCircleIcon className={classes.icon} />
                      <div className={classes.status}>PASSED</div>
                    </div>
                  ) : props.listForTestRight &&
                    props.listForTestRight[index]?.status === "Failed" ? (
                    <div className={classes.failedStatusDiv}>
                      <CancelIcon className={classes.icon} />
                      <div className={classes.status}>FAILED</div>
                    </div>
                  ) : (
                    <div className={classes.notMatch}>
                      <ReportProblemIcon className={classes.icon} />
                      <div className={classes.status}>NO MATCH</div>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </>
  );
}
