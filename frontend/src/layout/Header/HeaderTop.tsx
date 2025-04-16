import { Box, Container, Stack, Typography, Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TelegramIcon from '@mui/icons-material/Telegram';

const HeaderTop = () => (
  <Box sx={{ borderBottom: "1px solid rgba(255,255,255,0.1)", py: 1 }}>
    <Container maxWidth="xl">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={3} alignItems="center" fontSize={14}>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <CalendarMonthIcon fontSize="small" />
            <Typography>Обработка и выдача заказов</Typography>
          </Stack>
          <Typography>|</Typography>
          <Typography>Оплата</Typography>
          <Typography>|</Typography>
          <Typography>Система скидок</Typography>
          <Typography>|</Typography>
          <Typography>Вакансии</Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="body2">
            <Box component="span" sx={{ color: "red", fontWeight: "bold" }}>А</Box>{" "}
            8 (044) <Box component="span" fontWeight="bold">111-11-11</Box>
          </Typography>
          <TelegramIcon fontSize="small" />
          <Button variant="text" sx={{ color: "#fff", fontSize: 14, textTransform: "none" }}>
            Перезвонить
          </Button>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default HeaderTop;