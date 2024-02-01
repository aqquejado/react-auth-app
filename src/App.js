
import './App.css';
import React from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import HomeScreen from './components/home/HomeScreen';
import LoginScreen from './components/login/LoginScreen';
import RegisterScreen from './components/register/RegisterScreen';
import SentConfirmationScreen from './components/sent-confirmation/SentConfirmationScreen';
import DashboardScreen from './components/dashboard/DashboardScreen';
import ForgotPasswordScreen from './components/forgot-password/ForgotPasswordScreen';
import ResetPasswordScreen from './components/reset-password/ResetPasswordScreen';
import ProtectedRoute from './components/protected/ProtectedRoute';
import {authLoader, homePageLoader} from './shared/components/Loader'
import "./shared/styles/MainStyle.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen/>,
    loader: homePageLoader
  },
  {
    path: "/auth",
    loader: authLoader,
    children: [
      {
        path: "login",
        element: <LoginScreen/>,
      },
      {
        path: "register",
        element: <RegisterScreen/>,
      },
      {
        path: "register/confirm",
        element: <SentConfirmationScreen/>,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordScreen />
      },
      {
        path: "reset-password",
        element: <ResetPasswordScreen />
      },
    ]
  },
  {
    element: <ProtectedRoute />, 
    children: [
      {
        path: "/dashboard",
        element: <DashboardScreen/>,
      },
    ]
  },
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
