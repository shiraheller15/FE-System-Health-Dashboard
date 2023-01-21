import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import useStyles from "./ButtenFilter.style";


const ButtenFilter = (props: {
  changeFilter: Function,
  statusfilter: any,
  count: any,
}) => {
  const classes = useStyles();

  const onAllSelected = () => {
    props.changeFilter({ All: true, Passed: false, Warning: false, Failed: false });
  };

  const onPassedSelected = () => {
    if ((props.statusfilter.All === false && props.statusfilter.Passed === false && props.statusfilter.Failed === true && props.statusfilter.Warning === true) || (props.statusfilter.All === false && props.statusfilter.Passed === true && props.statusfilter.Failed === false && props.statusfilter.Warning === false))
      onAllSelected();
    else
      props.changeFilter({ All: false, Passed: !props.statusfilter.Passed, Warning: props.statusfilter.Warning, Failed: props.statusfilter.Failed });
  };

  const onWarningSelected = () => {
    if ((props.statusfilter.All === false && props.statusfilter.Passed === true && props.statusfilter.Failed === true && props.statusfilter.Warning === false) || (props.statusfilter.All === false && props.statusfilter.Passed === false && props.statusfilter.Failed === false && props.statusfilter.Warning === true))
      onAllSelected();
    else
      props.changeFilter({ All: false, Passed: props.statusfilter.Passed, Warning: !props.statusfilter.Warning, Failed: props.statusfilter.Failed });
  };

  const onFailedSelected = () => {
    if ((props.statusfilter.All === false && props.statusfilter.Passed === true && props.statusfilter.Failed === false && props.statusfilter.Warning === true) || (props.statusfilter.All === false && props.statusfilter.Passed === false && props.statusfilter.Failed === true && props.statusfilter.Warning === false))
      onAllSelected();
    else
      props.changeFilter({ All: false, Passed: props.statusfilter.Passed, Warning: props.statusfilter.Warning, Failed: !props.statusfilter.Failed });
  };

  return (
    <div className={classes.toAll}>
      <ButtonGroup variant="contained" className={classes.buttonGroup}>
        <Button
          className={
            props.statusfilter.All
              ? classes.blueButtonClicked
              : classes.blueButtonNotClicked
          }
          style={{
            fontSize: "12px",
            textTransform: "none",
          }}
          onClick={onAllSelected}
        >
          <div>
            <div>All</div>
            <div
              className={classes.divNumber}
              style={!props.statusfilter.All ? { backgroundColor: " #0091ea" } : {}}
            >
              {props.count.All}
            </div>
          </div>
        </Button>
        <Button
          className={
            props.statusfilter.Passed === true
              ? classes.greenButtonClicked
              : classes.greenButtonNotClicked
          }
          style={{ fontSize: "12px", textTransform: "none" }}
          onClick={onPassedSelected}
        >
          <div>
            <div>Passed</div>
            <div
              className={classes.divNumber}
              style={!props.statusfilter.Passed ? { backgroundColor: "#00bfa5" } : {}}
            >

              {props.count.Passed}
            </div>{" "}
          </div>
        </Button>
        <Button
          className={
            props.statusfilter.Warning ? classes.orangeButtonClicked : classes.orangeButtonNotClicked
          }
          style={{ fontSize: "12px", textTransform: "none" }}
          onClick={onWarningSelected}
        >
          <div>
            <div>Warning</div>
            <div
              className={classes.divNumber}
              style={props.statusfilter.Warning === false ? { backgroundColor: "rgb(220, 126, 92)" } : {}}
            >
              {props.count.Warning}
            </div>
          </div>
        </Button>
        <Button
          className={
            props.statusfilter.Failed === true ? classes.redButtonClicked : classes.redButtonNotClicked
          }
          style={{ fontSize: "12px", textTransform: "none" }}
          onClick={onFailedSelected}
        >
          <div>
            <div>Failed</div>
            <div
              className={classes.divNumber}
              style={!props.statusfilter.Failed ? { backgroundColor: "#e91e63" } : {}}
            >
              {props.count.Failed}
            </div>
          </div>
        </Button>
      </ButtonGroup>

    </div>
  );
};

export default ButtenFilter;
