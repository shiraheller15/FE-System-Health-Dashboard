import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  productName: {
    minWidth:100,
    background: "linear-gradient(45deg, #01579b 2%, #0091ea 100%)",
    color: "white",
    fontWeight: "bolder !important",
    maxHeight:50,
    marginRight:"10px",
    textAlign:"center",
    borderRadius:"8px !important"  , 
  },
  microserviceName: {
    minWidth: 100,
    background:"linear-gradient(45deg, rgb(57, 57, 82)  70%,#9A9A9A 250%)",
    Color: "white",
    maxHeight:50,
    marginRight:"10px",
    fontWeight: "bolder !important",
    borderRadius:"8px !important",

  },
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
  selects: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    marginBottom:"50px",
  },
  
  formControl:{
    border: 0,
    borderRadius: "50px !important"
  },
  inputLable:{
    fontWeight: "bolder !important",
  }
});
export default useStyles;
