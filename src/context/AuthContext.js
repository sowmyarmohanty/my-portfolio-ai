import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase/firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password);
  const login = (email, password) => auth.signInWithEmailAndPassword(email, password);
  const logout = () => auth.signOut();

  const value = { currentUser, signUp, login, logout };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
