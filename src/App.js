
import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import React from 'react';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import SentConfirmationScreen from './components/SentConfirmationScreen';
import DashboardScreen from './components/DashboardScreen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen/>,
  },
  {
    path: "/login",
    element: <LoginScreen/>,
  },
  {
    path: "/register",
    element: <RegisterScreen/>,
  },
  {
    path: "/register/confirm",
    element: <SentConfirmationScreen/>,
  },
  {
    path: "/dashboard",
    element: <DashboardScreen/>,
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
