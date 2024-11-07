import React, { useState } from 'react';
import { Container, TextField, Button, Grid2 as Grid, Typography, Box, IconButton } from '@mui/material';
import { AccountCircle, Lock, Email } from '@mui/icons-material';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., Firebase authentication)
  };

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
      <Box
        sx={{
          backgroundColor: '#1a1c2c',
          padding: '30px',
          borderRadius: '10px',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <Typography variant="h5" sx={{ color: '#fff', marginBottom: '20px' }}>
          Create new account.
        </Typography>

        <Typography variant="body2" sx={{ color: '#888', marginBottom: '30px' }}>
          Already A Member? <span style={{ color: '#4a90e2', cursor: 'pointer' }}>Log In</span>
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* First Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                label="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <IconButton edge="end">
                      <AccountCircle style={{ color: '#888' }} />
                    </IconButton>
                  ),
                }}
                variant="filled"
                sx={{
                  backgroundColor: '#2b2e44',
                  input: { color: '#fff' },
                  '& .MuiFilledInput-root': {
                    backgroundColor: '#2b2e44',
                  },
                  '& .MuiInputLabel-root': {
                    color: '#888',
                  },
                  '& .Mui-focused': {
                    color: '#fff',
                  },
                }}
              />
            </Grid>

            {/* Last Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                label="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <IconButton edge="start">
                      <AccountCircle style={{ color: '#888' }} />
                    </IconButton>
                  ),
                }}
                variant="filled"
                sx={{
                  backgroundColor: '#2b2e44',
                  input: { color: '#fff' },
                  '& .MuiFilledInput-root': {
                    backgroundColor: '#2b2e44',
                  },
                  '& .MuiInputLabel-root': {
                    color: '#888',
                  },
                  '& .Mui-focused': {
                    color: '#fff',
                  },
                }}
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleInputChange}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <IconButton edge="start">
                      <Email style={{ color: '#888' }} />
                    </IconButton>
                  ),
                }}
                variant="filled"
                sx={{
                  backgroundColor: '#2b2e44',
                  input: { color: '#fff' },
                  '& .MuiFilledInput-root': {
                    backgroundColor: '#2b2e44',
                  },
                  '& .MuiInputLabel-root': {
                    color: '#888',
                  },
                  '& .Mui-focused': {
                    color: '#fff',
                  },
                }}
              />
            </Grid>

            {/* Password */}
            <Grid item xs={12}>
              <TextField
                name="password"
                type="password"
                label="Password"
                value={formData.password}
                onChange={handleInputChange}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <IconButton edge="start">
                      <Lock style={{ color: '#888' }} />
                    </IconButton>
                  ),
                }}
                variant="filled"
                sx={{
                  backgroundColor: '#2b2e44',
                  input: { color: '#fff' },
                  '& .MuiFilledInput-root': {
                    backgroundColor: '#2b2e44',
                  },
                  '& .MuiInputLabel-root': {
                    color: '#888',
                  },
                  '& .Mui-focused': {
                    color: '#fff',
                  },
                }}
              />
            </Grid>

            {/* Buttons */}
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#666',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#555',
                  },
                }}
              >
                Change method
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#4a90e2',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#357abd',
                  },
                }}
              >
                Create account
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default RegistrationPage;