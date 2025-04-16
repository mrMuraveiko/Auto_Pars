import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

const AboutStore = () => {
  return (
    <Box sx={{ bgcolor: "#f9f9f9", borderRadius: 2, p: 4 }}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Новости и информация о магазине
      </Typography>

      <Stack direction={{ xs: "column", md: "row" }} spacing={5}>
        {/* Блок новостей */}
        <Box flex={1}>
          <Typography variant="h6" fontWeight="medium" gutterBottom>
            Новости
          </Typography>
          <Stack spacing={2}>
            <Typography variant="body2">🛠 Поступление новых брендов: Bosch, Valeo, NGK</Typography>
            <Typography variant="body2">🚚 Бесплатная доставка при заказе от 100 BYN</Typography>
            <Typography variant="body2">🆕 Обновлён фильтр по VIN-коду</Typography>
            <Button variant="text" size="small" sx={{ mt: 1, textTransform: "none" }}>
              Все новости →
            </Button>
          </Stack>
        </Box>

        {/* Блок "О магазине" */}
        <Box flex={2}>
          <Typography variant="h6" fontWeight="medium" gutterBottom>
            О магазине
          </Typography>
          <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
            AutoPars — это интернет-магазин автозапчастей с многолетним опытом.
            Мы предлагаем более 20 000 товаров в наличии, быструю доставку по всей Беларуси
            и гарантию на каждый товар. Удобный подбор по авто, консультации, скидки и бонусы.
          </Typography>
          <Button variant="contained" sx={{ mt: 2, bgcolor: "#f57c00", "&:hover": { bgcolor: "#ef6c00" } }}>
            Подробнее о нас
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default AboutStore;