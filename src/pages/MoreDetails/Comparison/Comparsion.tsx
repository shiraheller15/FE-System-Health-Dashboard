import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import useStyles from "./Comparsion.style";

const Comparsion = (props: {
  setCompareStatus: Function;
  countOfTest: any;
}) => {
  const classes = useStyles();
  let [compare, setCompare] = useState({ eq: false, all: true, dif: false });
  const getAll = () => {
    setCompare({ all: true, dif: false, eq: false });
    props.setCompareStatus("All");
  };
  const getEqual = () => {
    setCompare({ all: false, dif: false, eq: true });
    props.setCompareStatus("Equal");
  };
  const getDifferent = () => {
    setCompare({ all: false, dif: true, eq: false });
    props.setCompareStatus("Different");
  };
  return (
    <>
      <ButtonGroup variant="contained" style={{ maxHeight: 53 }}>
        <Button
          className={
            compare.all
              ? classes.blueButtonClicked
              : classes.blueButtonNotClicked
          }
          style={{
            fontSize: "12px",
            textTransform: "none",
            marginBottom: "14px",
          }}
          onClick={getAll}
        >
          <div>
            <div>All</div>
            <div
              className={classes.divNumber}
              style={!compare.all ? { backgroundColor: "#0091ea" } : {}}
            >
              {props.countOfTest.all}
            </div>
          </div>
        </Button>
        <Button
          className={
            compare.eq
              ? classes.greenButtonClicked
              : classes.greenButtonNotClicked
          }
          style={{ fontSize: "12px", textTransform: "none" }}
          onClick={getEqual}
        >
          <div>
            <div>Equal</div>
            <div
              className={classes.divNumber}
              style={!compare.eq ? { backgroundColor: "#00bfa5" } : {}}
            >
              {props.countOfTest.eq}
            </div>{" "}
          </div>
        </Button>
        <Button
          className={
            compare.dif ? classes.redButtonClicked : classes.redButtonNotClicked
          }
          style={{ fontSize: "12px", textTransform: "none" }}
          onClick={getDifferent}
        >
          <div>
            <div>Different</div>
            <div
              className={classes.divNumber}
              style={!compare.dif ? { backgroundColor: "#e91e63" } : {}}
            >
              {props.countOfTest.dif}
            </div>
          </div>
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Comparsion;
