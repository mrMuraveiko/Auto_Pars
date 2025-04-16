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
  import React from 'react';
  
  const LoginPage = () => {
    return (
      <Container sx={{ py: 8 }}>
        {/* Breadcrumb */}
        <Stack direction="row" alignItems="center" spacing={1} mb={2}>
          <HomeIcon fontSize="small" color="disabled" />
          <Typography color="text.disabled" fontSize={14}>Мой профиль</Typography>
          <Typography color="text.disabled" fontSize={14}>→</Typography>
          <Typography color="text.disabled" fontSize={14}>Вход</Typography>
        </Stack>
  
        {/* Заголовок */}
        <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center">
          Личный кабинет
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
          <TextField
            label="Логин / E-mail / Телефон"
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Пароль"
            variant="outlined"
            type="password"
            fullWidth
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Я не робот"
          />
          {/* Место под капчу */}
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
            {/* тут будет reCAPTCHA */}
            reCAPTCHA
          </Box>
  
          {/* Кнопки */}
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: '#f7941e',
                '&:hover': { bgcolor: '#e58313' },
                fontWeight: 'bold',
              }}
            >
              Войти
            </Button>
            <Button variant="outlined" fullWidth>
              Забыли пароль?
            </Button>
          </Stack>
        </Box>
      </Container>
    );
  };
  
  export default LoginPage;