import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import { firestore } from '../../firebase/firebase';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const { signUp } = useAuth();

  const handleSubmit = async (e) => {
   // e.preventDefault();
    try {
      const userCredential = await signUp(email, password);
      await firestore.collection('users').doc(userCredential.user.uid).set({
        name,
        address,
      });
      alert('User registered successfully');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" value={name} onChange={e => setName(e.target.value)} fullWidth />
        <TextField label="Address" value={address} onChange={e => setAddress(e.target.value)} fullWidth />
        <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} fullWidth />
        <TextField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} fullWidth />
        <Button type="submit" variant="contained" color="primary">Register</Button>
      </form>
    </Container>
  );
};

export default Register;