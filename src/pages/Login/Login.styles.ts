import { makeStyles } from '@mui/styles'
const useStyles = makeStyles({
    box: {
        backgroundColor: '	#222940',
        borderRadius: 5,
    },
    body: {
        backgroundColor: '#28263a',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'flex-start',
        height: '100vh'
    },
    title: {
        color: 'white'
    },
    Typography: {
        color: 'white'
    },
    textField: {
        border: '0.5px solid white',
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',

        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    },
    img: {
        width: 150,
        borderRadius: 100
    },
    btn: {
        // background: 'linear-gradient(270deg, #222940 18.18%, rgba(100, 159, 253, 0.89) 300%)!important', color: '#FFFFFF !important'
        backgroundColor: " rgb(57, 57, 82) !important",

        color: 'white !important'
    },

    logo: {
        width: "5%",
        borderRadius: "30px !important",
    },
    div: {
        display: 'flex',
        alignContent: 'flex-start',
        margin: 13,
    },
});
export default useStyles;