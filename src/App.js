
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
import {homePageLoader} from './shared/components/Loader'
import "./shared/styles/MainStyle.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen/>,
    loader: homePageLoader
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
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordScreen />
  },
  {
    path: "/reset-password",
    element: <ResetPasswordScreen />
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
