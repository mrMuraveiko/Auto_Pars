import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const RegisterPage = () => {
  return (
    <Container sx={{ py: 8 }}>
      {/* Хлебные крошки */}
      <Stack direction="row" alignItems="center" spacing={1} mb={2}>
        <HomeIcon fontSize="small" color="disabled" />
        <Typography color="text.disabled" fontSize={14}>Мой профиль</Typography>
        <Typography color="text.disabled" fontSize={14}>→</Typography>
        <Typography color="text.disabled" fontSize={14}>Регистрация</Typography>
      </Stack>

      {/* Заголовок */}
      <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center">
        Заявка на регистрацию
      </Typography>

      {/* Форма */}
      <Box
        sx={{
          maxWidth: 400,
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <TextField label="Имя и Фамилия *" fullWidth />
        <TextField label="Телефон *" helperText="в формате +375 или +7" fullWidth />
        <TextField label="E-mail" fullWidth />
        <TextField label="Адрес" fullWidth />
        <TextField label="Город" defaultValue="Минск" fullWidth />
        <TextField label="Пароль *" type="password" fullWidth />
        <TextField label="Подтверждение пароля *" type="password" fullWidth />

        {/* Чекбоксы */}
        <FormControlLabel
          control={<Checkbox />}
          label="Юридическое лицо (Да/Нет)"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Принимаю условия Оферты"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="SMS рассылка"
        />

        {/* Капча */}
        <Box
          sx={{
            height: 80,
            bgcolor: '#f0f0f0',
            borderRadius: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 12,
            color: 'text.disabled',
          }}
        >
          reCAPTCHA
        </Box>

        {/* Кнопка */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: '#f7941e',
            '&:hover': { bgcolor: '#e58313' },
            fontWeight: 'bold',
            mt: 1,
          }}
        >
          Зарегистрироваться
        </Button>
      </Box>
    </Container>
  );
};

export default RegisterPage;