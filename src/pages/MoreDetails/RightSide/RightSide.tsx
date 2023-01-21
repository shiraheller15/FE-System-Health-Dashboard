import { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import Box from "@mui/material/Box";
import { useStyles } from "./RightSide.style";
import { IFilterRight, ISelectButtonsRight } from "../../../types/types";
import { getFilteredReports, getScannerByIdFromServer } from "../../../api/scannersApi";



export const  RightSide=(props:{
  setScannerByIdToCompare:Function,
  rightFilter:IFilterRight
  rightDropLists:ISelectButtonsRight,
  scannerName:string
})=> {

  const classes = useStyles();

  const [filter, setFilter] = useState<IFilterRight>(
    {
      productName: props.rightFilter.productName,
      microserviceName: props.rightFilter.microserviceName,
      branch: "",
      report: ""
    }
  );

  const [selectButtonOptions, setSelectButtonOptions] = useState<ISelectButtonsRight>({
    branchesDropList: props.rightDropLists.branchesDropList,
    reportsDropList: []
  })

  useEffect(() => {
     setSelectButtonOptions({ ...selectButtonOptions, branchesDropList: props.rightDropLists.branchesDropList,})
}, [props.rightDropLists])

  useEffect(() => {
    setFilter({
      ...filter, productName: props.rightFilter.productName,
      microserviceName: props.rightFilter.microserviceName, branch: "", report: ""
    })
    props.setScannerByIdToCompare(null)

  }, [props.rightFilter])

  useEffect(() => {
    if(filter.branch!=="")
    getFilteredReports(filter.productName, filter.microserviceName, filter.branch,props.scannerName)
                .then((res) => setSelectButtonOptions({ ...selectButtonOptions, reportsDropList: res.data }))
}, [filter.branch])

useEffect(() => {
  if(filter.report!=="")
  getScannerByIdFromServer(filter.report|| "").then((res) => props.setScannerByIdToCompare(res.data))
}, [filter.report])


  return (
    <>
      <Box className={classes.box}>
        <FormControl fullWidth>
          <InputLabel  style={{ color: "white" }} className={classes.inputLable}>Branch Name</InputLabel>
          <Select
            sx={{ color: "white" }}
            className={classes.branch}
            value={filter.branch}
            disabled={props.rightFilter.microserviceName===""}
            onChange={(event) =>{
              setFilter({ ...filter, branch: event.target.value as string, report: "" })
              props.setScannerByIdToCompare(null)
            }
            }
          >
            {selectButtonOptions.branchesDropList.map((branchName, index) => { return <MenuItem value={branchName} key={index}>{branchName}</MenuItem> })}
          </Select>

        </FormControl>
        <FormControl fullWidth>
          <InputLabel style={{ color: "white" }} className={classes.inputLable}>Report</InputLabel>
          <Select
            sx={{ color: "white" }}
            className={classes.report}
            value={filter.report}
            disabled={filter.branch === ""}
            onChange={(event) => {
              setFilter({ ...filter, report: event.target.value as string });

            }
            }
          >
            {selectButtonOptions.reportsDropList.map((reportName, index) => { return <MenuItem value={reportName.id} key={index}>{reportName.buildNumber}</MenuItem> })}
          </Select>
        </FormControl>
        <Button fullWidth style={{textTransform:"none",}}
          className={classes.goToReport}
          disabled={true}
          onClick={() => {
            
                
          }}
          variant="contained">
          Go to report
        </Button>
      </Box>
    </>
  );
}
export default RightSide;
