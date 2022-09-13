import React from 'react';
import NavBar from '../navbar/Navbar';
import { Outlet } from 'react-router';

export default () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};