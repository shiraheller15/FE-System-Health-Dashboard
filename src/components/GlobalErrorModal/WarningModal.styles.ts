import { makeStyles } from '@mui/styles'
const useStyles = makeStyles({
    box: {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 200,
        backgroundColor: 'white',
        border: '5px solid #F5365C',
        p: 4,
        borderRadius: 10,
    },
    Typography: {
        textAlign: 'center',
    },
    btn: {
        marginTop: 6,
        width: 200,
        margin: 50,
        color: 'white !important',
        background: ' linear-gradient(53.16deg, #F5365C 28.79%, rgba(245, 54, 92, 0) 114.92%)',
        //  background:' linear-gradient(270deg, #2A2A72 18.18%, rgba(0, 159, 253, 0.89) 100%)',
    }
});
export default useStyles;