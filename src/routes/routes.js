// routes.js
import { lazy } from 'react';

// Define routes with lazy-loaded components
const routes = [
  {
    name: 'Dashboard',
    uri: '/dashboard',
    component: lazy(() => import('../pages/dashboard/Dashboard')), // Lazy loading Dashboard component
    protected: false,
  },
  {
    name: 'Register',
    uri: '/register',
    component: lazy(() => import('../pages/auth/Signup')), // Lazy loading Register component
    protected: false,
  },
  {
    name: 'Login',
    uri: '/login',
    component: lazy(() => import('../pages/auth/Signin')), // Lazy loading Login component
    protected: false,
  },
  {
    name: 'Aiassistant',
    uri: '/assistant',
    component: lazy(() => import('../pages/ai/AiAssistant')), // Lazy loading Login component
    protected: false,
  }
];

export default routes;
