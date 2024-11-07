// App.js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import routes from './routes/routes'; // Importing routes list
import CircularProgress from '@mui/material/CircularProgress';
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import { styled, Box } from "@mui/material";
const Content = styled('main')({
  flexGrow: 1,
  padding: '20px',
  paddingTop: '64px', // Add padding to account for the fixed header
  backgroundColor: '#2d2d2d', // Slightly different shade for content area
  color: '#ffffff',
  overflow: 'auto'
});
function App() {
  return (
    <Router>
      <AuthProvider>
      <Sidebar />
      <Box sx={{ flex: 1 , backgroundColor:'#2d2d2d'}}>
          <Header />
          <Content>
          <Suspense fallback={<div style={{ textAlign: 'center', padding: '20px' }}><CircularProgress /></div>}>
          <Routes>
            {routes.map((route, index) => {
              const { uri, component: Component, protected: isProtected } = route;
              return (
                <Route
                  key={index}
                  path={uri}
                  element={
                    isProtected ? (
                      <ProtectedRoute>
                        <Component />
                      </ProtectedRoute>
                    ) : (
                      <Component />
                    )
                  }
                />
              );
            })}
          </Routes>
        </Suspense>

          </Content>
        </Box>

      </AuthProvider>
    </Router>
  );
}

export default App;
