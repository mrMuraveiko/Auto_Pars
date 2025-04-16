import React from "react";
import { Box, Typography, ButtonBase } from "@mui/material";

const brands = [
  { name: "BMW", logo: "/brands/bmw.png" },
  { name: "Audi", logo: "/brands/audi.png" },
  { name: "Toyota", logo: "/brands/toyota.png" },
  { name: "Volkswagen", logo: "/brands/vw.png" },
  { name: "Mercedes", logo: "/brands/mercedes.png" },
  { name: "Honda", logo: "/brands/honda.png" },
  { name: "Kia", logo: "/brands/kia.png" },
  { name: "Hyundai", logo: "/brands/hyundai.png" },
  { name: "Skoda", logo: "/brands/skoda.png" },
  { name: "Ford", logo: "/brands/ford.png" },
];

const BrandList = () => {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Популярные марки автомобилей
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        {brands.map((brand) => (
          <ButtonBase
            key={brand.name}
            sx={{
              width: 100,
              height: 100,
              borderRadius: 2,
              border: "1px solid #eee",
              p: 1.5,
              bgcolor: "#fff",
              transition: "all 0.2s",
              "&:hover": {
                boxShadow: 3,
                transform: "scale(1.05)",
              },
            }}
            onClick={() => console.log(`Выбран бренд: ${brand.name}`)}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </ButtonBase>
        ))}
      </Box>
    </Box>
  );
};

export default BrandList;