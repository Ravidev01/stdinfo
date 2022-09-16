import React from 'react';
import NavBar from '../navbar/Navbar';
import { Outlet } from 'react-router';

const Withnav = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Withnav;