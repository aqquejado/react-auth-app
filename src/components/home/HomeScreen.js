import { useEffect } from 'react';
import { redirect } from 'react-router-dom';

const HomeScreen = () => {
  redirect("/login")

  return (
    <p>Hello</p>
  )
}

export default HomeScreen;