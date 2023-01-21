import { makeStyles } from "@mui/styles";
import { PRIMARY_COLOR } from "../../../helpers/colorsConstant";

export const useStyles = makeStyles({
  table: {
    backgroundColor: "#1b1a1f",
    minWidth: "98vw",
    maxWidth: "98vw !important",
    margin: "0.5vw",
    marginTop: "10vh",
  },
  tableHead: {
    backgroundColor: "#190f42bb",
    borderColor: "#1b1a1f !important",
  },
  tableRow: {
    backgroundColor: PRIMARY_COLOR,
  },
  indexTableCell: {
    textAlign: "left",
    maxWidth: "1vw !important",
    width: "1vw !important",
  },
  statusTableCell: {
    textAlign: "left",
    maxWidth: "7vw !important",
    width: "6vw !important",
  },
  descriptionTableCell: {
    textAlign: "left",
    maxWidth: "27vw !important",
    width: "27vw !important",
  },
  tableCellCompare: {
    visibility: "hidden",
    borderColor: "#1b1a1f !important",
  },
  equalIcon: {
    background: "#00F2C3",
    padding: 4,
    borderRadius: 2,
  },
  notEqualIcon: {
    background: "#F5365C",
    padding: 4,
    borderRadius: 2,
  },
  compareCell: {
    borderColor: "#1b1a1f !important",
    backgroundColor: "#1b1a1f",
    width: "12vw",
  },
  passedStatusDiv: {
    display: "flex",
    width: "100px",
    height: "27px",
    background: "#00F2C3",
    borderRadius: 7,
    color: "black",
    fontWeight: "bold",
  },
  icon: {
    width: "5px",
    margin: "2px",
  },
  status: {
    margin: "5px",
  },
  failedStatusDiv: {
    display: "flex",
    width: "95px",
    height: "27px",
    background: "#F5365C",
    borderRadius: 7,
    color: "black",
    fontWeight: "bold",
  },
  notMatch: {
    background: "#FF8D72",
    display: "flex",
    width: "120px",
    height: "27px",
    borderRadius: 7,
    color: "black",
    fontWeight: "bold",
  },
});
