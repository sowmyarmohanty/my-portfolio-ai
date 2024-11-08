import React, { useState }  from "react";

import {
  TextField,
  Button,
  Link,
  Grid2,
  Box,
  Typography,
  Container,
  InputAdornment,
  styled,
} from "@mui/material";
import { Lock, Mail } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Paper = styled("div", {
  name: "MuiPaper", // The component name
  slot: "root", // The slot name
})(({ theme }) => ({
  marginTop: theme.spacing(15),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "30px",
  borderradius: "4px",
  boxShadow:
    "0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)",
}));

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (error) {
      alert('Invalid credentials');
    }
  };
  const theme = useTheme();
  return (
    <Container maxWidth="sm" >
      <Paper>
        <Typography component="div">
          <Box fontSize={30} fontWeight={600} m={-2}>
            SIGN IN
          </Box>
        </Typography>
        <Typography component="div">
          <Box fontSize={16} m={5}>
            Have an account?Please enter your login details
          </Box>
        </Typography>
        <form style={{ width: "100%", marginTop: theme.spacing(1) }} noValidate onSubmit={handleSubmit}>
          <Grid2 container spacing={2}>
            <Grid2 size={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email} onChange={e => setEmail(e.target.value)} 
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Mail color="disabled" />
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password} 
                onChange={e => setPassword(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock color="disabled" />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid2>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ margin: theme.spacing(3, 0, 2) }}
              m={0}
            >
              Sign In
            </Button>
            <Link href="#" variant="body2" color="secondary">
              Forgot your password?
            </Link>
            
          </Grid2>
          <Grid2 container >
              <Grid2 size={8}>
                <Typography component="div">
                  <Box fontSize={15} paddingTop={1}>
                  You do not have an Account?
                  </Box>
                </Typography>
              </Grid2>
              <Grid2 size={4}>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
              >
                SIGN UP
              </Button>
              </Grid2>
            </Grid2>
        </form>
      </Paper>
    </Container>
  );
};
export default Signin;
