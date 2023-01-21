import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  
  branch: {
    background:"linear-gradient(45deg, #00bfa5 20%, #00e676 150%)",
    Color: "white",
    minWidth: 100,
    maxHeight:50,
    marginRight:"10px",
    fontWeight: "bolder !important",
    borderRadius:"8px !important",
    
  },
  report: {
    background: "linear-gradient(45deg, #01579b 2%, #0091ea 100%)",
    Color: "white",
    minWidth: "80 !important",
    maxHeight:50,
    marginRight:"10px",
    fontWeight: "bolder !important",
    borderRadius:"8px !important",
  },
  
  goToReport:{
    background:"linear-gradient(30deg, #F5365C 2%, #FF8D72 90%)",
    color: "white !important",
    minWidth: "100 !important",
    maxHeight:50,
    marginRight:"10px",
    fontWeight: "bolder !important",
    fontSize:"16px !important",
    textTransform:"none",
    borderRadius:"8px !important",
    
    
  },
  box: {
    display: "flex",
    flexDirection: "row",
    marginBottom:"50px",
    width: "60%"
  },
  inputLable:{
    fontWeight: "bolder !important",
  }
});
