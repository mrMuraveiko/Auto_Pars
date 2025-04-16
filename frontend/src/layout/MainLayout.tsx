import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Box from '@mui/material/Box';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Box component="main" sx={{ minHeight: '80vh' }}>
        {children || <Outlet />}
      </Box>
      <Footer />
    </>
  );
};

export default MainLayout;