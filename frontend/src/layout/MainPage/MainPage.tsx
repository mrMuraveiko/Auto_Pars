import React from 'react';
import HeroSlider from './HeroSlider';
import VehicleFilter from './VehicleFilter';
import PartCategories from './PartCategories';
import BrandList from './BrandList';
import Manufacturers from './Manufacturers';
import AboutStore from './AboutStore';
import { Box, Container } from '@mui/material';

const MainPage = () => {
  return (
    <>
      <HeroSlider />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <VehicleFilter />
        <Box mt={6}>
          <PartCategories />
        </Box>
        <Box mt={6}>
          <BrandList />
        </Box>
        <Box mt={6}>
          <Manufacturers />
        </Box>
        <Box mt={6}>
          <AboutStore />
        </Box>
      </Container>
    </>
  );
};

export default MainPage;