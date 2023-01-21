import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  logo: {
    width: "5%",
    borderRadius: "30px !important",
    marginLeft: "2%",
  },
  div: {
    display: "flex",
    alignContent: "flex-start",
  },
  header: {
    position: "sticky",
   zIndex: 999,
    backgroundColor: "black",
    top: 0,
    width: "100%",
    paddingTop: "5px",
    paddingBottom: "10px",
      "@media (max-width: 800px)": {
        paddingTop: "1px",
        flexWrap: "wrap",
      },
    },
 
  ScannersGraf: {
    width: 90,
  },
  allGraf: {
    justifyContent: "center",
    alignItems: "center !important",
    display: "flex",
    flexFlow: "wrap",
    margin: 25,
    gap: 25,
    "@media (max-width: 1000px)": {
      alignItems: "center !important",
      flexDirection: "row",
      justifyContent: "center",
    },
    "@media (max-width: 700px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
});
