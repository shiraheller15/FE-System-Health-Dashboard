import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  productButton: {
    backgroundColor: "#1D8CF8",
  },
  servicesButton: {
    backgroundColor: "rgb(57, 57, 82)",
  },
  branchButton: {
    background:
      "linear-gradient(360deg, #00F2C3 0%, rgba(0, 255, 206, 0) 400.58%) !important",
  },
  category: {
    background:
      "linear-gradient(360deg, #00F2C3 0%, rgba(0, 255, 206, 0) 400.58%) !important",
  },
  box: {
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
    zIndex: 1000,
    position: "relative",
    left: "-340px",
    "@media (max-width: 1500px)": {
      display: "center important",
      alignItems: "center !important",
      justifyContent: "center",
      left: "0px",
    },
  },
  formControl: {
    "@media (max-width: 800px)": {
      maxWidth: "140px",
      paddingTop: "5px",
    },
  },
  inputLabel: {
    color: "white !important",
    fontWeight: "bold !important",
    fontSize: "13px !important",
  },
  fromDate: {
    backgroundColor: "#1D8CF8 !important",
    marginRight: "4px !important",
    width: "125px",
  },
  toDate: {
    backgroundColor: "rgb(57, 57, 82) !important",
    marginRight: "4px !important",
    width: "125px",
    "@media (max-width: 800px)": {
      paddingBottom: "5px !important",
      paddingTop: "5px",
    },
  },
});

export const theme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          fontFamily: "Questrial",
          paddingLeft: "5px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "white",
          fontWeight: "bold",
          fontFamily: "Questrial",
          borderRadius: "6px",
          height: "41px",
          minWidth: "125px",
          marginRight: "4px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "white",
          fontFamily: "Questrial",
          fontWeight: "bold",
          fontSize: "13px",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          width: "0.8em",
          height: "0.8em",
          color: "white",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          paddingTop: "8px",
          fontSize: "13px",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: "41px",
          borderRadius: "6px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          fill: "white",
          paddingTop: "5px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(57, 57, 82)",
          color: "white",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "rgb(255 255 255 / 60%)",
        },
      },
    },
  },
});
