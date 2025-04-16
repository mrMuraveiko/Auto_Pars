import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { getParts, PartItem } from "@/services/partsService";

const PartCategories = () => {
  const [parts, setParts] = useState<PartItem[]>([]);

  useEffect(() => {
    getParts().then(setParts);
  }, []);

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Популярные запчасти
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {parts.map((part) => (
          <Box
            key={part.id}
            sx={{
              width: {
                xs: '100%',
                sm: 'calc(50% - 12px)',
                md: 'calc(33.33% - 16px)',
                lg: 'calc(25% - 18px)'
              },
              flexGrow: 1,
            }}
          >
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="160"
                image={part.image}
                alt={part.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">
                  {part.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Категория: {part.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Бренд: {part.brand}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PartCategories;
