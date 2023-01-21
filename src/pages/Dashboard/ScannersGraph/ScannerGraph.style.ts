import { makeStyles } from '@mui/styles'
const useStyles = makeStyles({
  headerCard: {
    float: "left",
    margin: 12,
    textAlign: 'left'
  },
  nameCard: {
    fontSize: 13,
    color: 'gray',
    marginBottom: 0,
  },
  iconCard: {
    marginTop: 0,
    float: "left",
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  icon: {
    width: '50%',
    height: '1.8vw',
  },
  sum: {
    flex: 'none',
    fontSize: 27
  },
  type: {
    float: "right",
    margin: 12,
  },
  styleCard: {
    fontFamily: 'Questrial',
    backgroundColor: "#222940",
    position: "relative",
    height: 350,
    color: 'white',
    width: '32%',
    paddingRight: 2,
    paddingLeft: 0,
    overflow: "hidden",
    overflowX: 'auto',
    "@media (max-width: 1500px)": {
      width: '45%',
    },
    "@media (max-width: 700px)": {
      width: '80%',
      height: 320,
    },
    
  },
  allScannersCard: {
    fontFamily: 'Questrial',
    width: '99.5%',
    backgroundColor: "#222940",
    position: "relative",
    height: 350,
    color: 'white',
    overflow: "hidden",
    overflowX: 'auto',
    overflowClipBox: 'padding-box'
  },
  header: {
    position: 'sticky',
    left: 5
  },
  tooltip: {
    borderRadius: '0.25rem',
    background: "#26313c",
    padding: '1rem',
    boxShadow: '15px 30px 40px 5px rgba(0,0,0,0.5)',
    textAlign: 'center'
  }
  
});
export default useStyles