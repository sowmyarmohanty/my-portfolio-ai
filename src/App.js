// App.js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import routes from './routes/routes'; // Importing routes list
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  return (
    <Router basename='/workspace-ui'>
      <AuthProvider>
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
      </AuthProvider>
    </Router>
  );
}

export default App;
