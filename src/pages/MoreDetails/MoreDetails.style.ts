import { makeStyles } from "@mui/styles";
import { SUCCESS_GRAPH_COLOR } from "../../helpers/colorsConstant";

export const useStyles = makeStyles({
  bodyStyle: {
    backgroundColor: "#1b1a1f",
    color: "white",
    minHeight: "100vh",
  },
  logo: {
    width: "5%",
    borderRadius: "30px !important",
  },
  title: {
    marginLeft: "3%",
    marginRight: "25%",
  },
  nav: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    marginBottom: "1vw !important",
  },
  scannerName: {
    background: "linear-gradient(45deg, #01579b 2%, #0091ea 100%)",
    Color: "white",
    maxHeight: 35,
    fontWeight: "bolder !important",
    borderRadius: "8px !important",
    marginRight: "2vw",
  },
});
