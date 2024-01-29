
import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import React from 'react';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';

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
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
