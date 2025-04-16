import React from "react";
import { Box, Typography, ButtonBase } from "@mui/material";

const manufacturers = [
  { name: "Bosch", logo: "/manufacturers/bosch.png" },
  { name: "Valeo", logo: "/manufacturers/valeo.png" },
  { name: "NGK", logo: "/manufacturers/ngk.png" },
  { name: "MANN", logo: "/manufacturers/mann.png" },
  { name: "Denso", logo: "/manufacturers/denso.png" },
  { name: "KYB", logo: "/manufacturers/kyb.png" },
  { name: "TRW", logo: "/manufacturers/trw.png" },
  { name: "Sachs", logo: "/manufacturers/sachs.png" },
];

const Manufacturers = () => {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Популярные бренды запчастей
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        {manufacturers.map((brand) => (
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

export default Manufacturers;