import * as React from 'react';
import { Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useStyles from './Login.styles';
import { useNavigate } from 'react-router-dom';
import { logInUser } from '../../api/logInApi';
import swal from 'sweetalert';
import dellLogo from '../../icons/dellLogo.jpg';
import { ILogInDetails } from '../../types/types';
import { USER_DETAILS_ERROR, ACCOUNT_BLOCKED_ERROR } from '../../helpers/loginConstant';

const theme = createTheme();
export default function Login() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [logIn, setLogIn] = React.useState<ILogInDetails>({ userName: "", password: "" })
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await logInUser(logIn);
      localStorage.setItem("uuid", response.data);
      navigate("/");
    }
    catch (error: any) {
      if (error.response.status === 404 || error.response.status === 405) {
        const { title, content, icon } = USER_DETAILS_ERROR
        swal(title, content, icon)
      }

      else if (error.response.status === 403) {
        const { title, content, icon } = ACCOUNT_BLOCKED_ERROR
        swal(title, content, icon)
      }
    }
  }
  return (
    <div className={classes.body}>
      <div className={classes.div} >
        <img src={dellLogo} alt="logo" className={classes.logo}></img>
      </div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" >
          <CssBaseline />
          <Box
            sx={{
              width: 400,
              height: 550,
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: 5
            }}
            className={classes.box}
          >
            <Typography sx={{ marginTop: 8 }} className={classes.title} component="h1" variant="h5">
              LOGIN
            </Typography>
            <Typography sx={{ marginTop: 1 }} variant="body2" className={classes.Typography}>
              Please enter your login and password
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate >
              <TextField
                className={classes.textField}
                margin="normal"
                required
                sx={{ input: { color: 'white' }, marginTop: 6, width: 300, }}
                id="userName"
                label="UserName"
                name="userName"
                autoComplete="userName"
                onChange={(e) => setLogIn({ ...logIn, userName: e.target.value })}
              />
              <TextField
                className={classes.textField}
                sx={{ input: { color: 'white' }, marginTop: 4, width: 300 }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setLogIn({ ...logIn, password: e.target.value })}
              />
              <Grid container>
                <Grid item xs>
                  <Link style={{ color: '#FFFFFF', textDecoration: 'none' }} href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Button
                className={classes.btn}
                type="submit"
                style={{}}
                sx={{ marginTop: 6, width: 200 }}
                fullWidth
              >
                Login
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}