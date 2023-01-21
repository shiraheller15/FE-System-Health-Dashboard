import {
  Pagination,
  PaginationItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { getScannersByPagination } from "../../../redux/thunks/scannersThunks";
import { IFilter, IScannerUnifiedFormat } from "../../../types/types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SingleScanner from "./SingleScanner";
import { useStyles } from "./ScannersTable.styles";

export interface IHeader {
  value: string;
  color: string;
}

const ScannersTable: React.FC<{ filters: IFilter }> = (props) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const [page, setPage] = useState(0);
  useEffect(() => {
    dispatch(
      getScannersByPagination(page, props.filters.scannerName, props.filters.productName)
    );
  }, [page]);

  useEffect(() => {
    setPage(0);
    dispatch(
      getScannersByPagination(page, props.filters.scannerName, props.filters.productName)
    );
  }, [props.filters]);
  const scanners: IScannerUnifiedFormat[] = useAppSelector(
    (state):IScannerUnifiedFormat[] => state.scannersReducer.scanners
  );

  const headers: Array<IHeader> = [
    {
      value: "NUM",
      color: "#ffffff",
    },
    {
      value: "TEST NAME",
      color: "#ffffff",
    },
    {
      value: "SEVERITY",
      color: "#ffffff",
    },
    {
      value: "CURRENT STATUS",
      color: "#ffffff",
    },
    {
      value: "DURATION",
      color: "#ffffff",
    },
    {
      value: "PASSED HISTORY",
      color: "#08d6adcf",
    },
    {
      value: "FAILED HISTORY",
      color: "#e71980b3",
    },

    {
      value: "TOTAL HISTORY",
      color: "#b32aa1cf",
    },
    {
      value: "DISPLAY REPORT",
      color: "#ffffff",
    },
  ];

  return (
    <>
      <TableContainer className={classes.table}>
        <Table className={classes.table}>
          <TableHead className={classes.tableHead}>
            <TableRow>
              {headers.map((header: IHeader, index: number) => (
                <TableCell
                  key={index}
                  sx={{
                    color: `${header.color}`,
                  }}
                >
                  {header.value}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {scanners &&
              scanners.map((scanner: IScannerUnifiedFormat, index: number) => (
                <SingleScanner scanner={scanner} key={index}></SingleScanner>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack spacing={2}>
        <Pagination
          count={10}
          page={page}
          onChange={(event: React.ChangeEvent<unknown>, value: number) => {
            setPage(value);
          }}
          renderItem={(item) => (
            <PaginationItem
              sx={{
                backgroundColor: '#074876b3',
                color: '#08d6adcf'
              }}
              components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </>
  );
};

export default ScannersTable;
