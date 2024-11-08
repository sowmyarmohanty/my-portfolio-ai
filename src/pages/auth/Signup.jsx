import React,{useState} from "react";

import {
  TextField,
  Button,
  Grid2,
  Box,
  Typography,
  Container,
  InputAdornment,
  styled,
} from "@mui/material";
import { Lock, Mail, Person2 } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useAuth } from '../../context/AuthContext';
import { firestore } from '../../firebase/firebase';

const Paper = styled("div", {
  name: "MuiCustomPaper", // The component name
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

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { signUp } = useAuth();

  const handleSubmit = async (e) => {
   // e.preventDefault();
    try {
      const userCredential = await signUp(email, password);
      await firestore.collection('users').doc(userCredential.user.uid).set({
        name
      });
      alert('User registered successfully');
    } catch (error) {
      alert(error.message);
    }
  };

  const theme = useTheme();
  return (
    <Container maxWidth="sm">
      <Paper>
        <Typography component="div">
          <Box fontSize={30} fontWeight={600} m={-2}>
            SIGN UP
          </Box>
        </Typography>
        <Typography component="div">
          <Box fontSize={16} m={1} paddingT>
            Register here!
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
                id="name"
                label="Name"
                name="email"
                autoComplete="name"
                autoFocus
                value={name} 
                onChange={e => setName(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person2 color="disabled" />
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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email} 
                onChange={e => setEmail(e.target.value)}
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
                value={password} onChange={e => setPassword(e.target.value)}
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
              Sign Up
            </Button>
          </Grid2>
          <Grid2 container>
            <Grid2 size={8}>
              <Typography component="div">
                <Box fontSize={15} paddingTop={1}>
                  Already have an Account?
                </Box>
              </Typography>
            </Grid2>
            <Grid2 size={4}>
              <Button type="submit" fullWidth variant="outlined">
                SIGN IN
              </Button>
            </Grid2>
          </Grid2>
        </form>
      </Paper>
    </Container>
  );
};
export default Signup;
