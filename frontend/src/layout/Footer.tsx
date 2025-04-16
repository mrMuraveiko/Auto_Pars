import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Link,
  Stack,
  Divider,
} from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import StarIcon from '@mui/icons-material/Star';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Помощь',
      items: ['Все марки авто', 'Запрос по VIN', 'Карта сайта', 'Прайс-лист', 'Шинный калькулятор'],
    },
    {
      title: 'О магазине',
      items: ['О компании', 'Контакты', 'Отзывы клиентов', 'Новости', 'Статьи', 'Вопрос-ответ', 'Вакансии'],
    },
    {
      title: 'Покупателям',
      items: [
        'Система скидок',
        'Партнерская программа',
        'Способы оплаты',
        'Гарантия',
        'Возврат товара',
        'Публичная оферта',
        'Обработка файлов cookies',
        'Обработка персональных данных',
        'Обращения потребителей',
      ],
    },
    {
      title: 'Профиль',
      items: ['Вход', 'Регистрация'],
    },
  ];

  return (
    <Box sx={{ mt: 8, bgcolor: '#fff' }}>
      {/* Верхняя полоса */}
      <Box sx={{ height: 54, bgcolor: '#2c2c4d', color: '#fff', py: 1 }}>
        <Typography variant="body2" align="center" fontSize={13}>
          Информация о товаре предоставлена для ознакомления и не является публичной офертой...
        </Typography>
      </Box>

      {/* Контент */}
      <Container sx={{ py: 5 }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          {/* Контакты */}
          <Box sx={{ flex: '0 0 320px' }}>
            <Stack spacing={1}>
              <Typography sx={{ color: '#d32f2f', fontWeight: 700 }}>
                8 (029) 111-11-11
              </Typography>
              <Typography sx={{ color: '#d32f2f', fontWeight: 700 }}>
                8 (044) 111-11-11
              </Typography>

              <Stack direction="row" spacing={1} mt={1}>
                <Button variant="outlined" size="small" color="inherit">
                  ПЕРЕЗВОНИТЬ
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    bgcolor: '#f7941e',
                    '&:hover': { bgcolor: '#e58313' },
                    whiteSpace: 'nowrap',
                  }}
                >
                  НАПИСАТЬ РУКОВОДСТВУ
                </Button>
              </Stack>

              <Typography fontSize={13} mt={2}>
                <b>24/7</b> Онлайн заказы принимаются круглосуточно
              </Typography>

              <Box mt={2}>
                <Typography fontWeight="bold">Обработка заказов</Typography>
                <Typography fontSize={13}>Пн–Пт 9.00 – 21.00</Typography>
                <Typography fontSize={13}>Сб 9.00 – 19.00</Typography>
                <Typography fontSize={13}>Вс 9.00 – 17.00</Typography>
              </Box>

              <Box mt={2}>
                <Typography fontWeight="bold">Выдача заказов (Минск и Гродно)</Typography>
                <Typography fontSize={13}>Пн–Пт 9.00 – 21.00</Typography>
                <Typography fontSize={13}>Сб 9.00 – 19.00</Typography>
                <Typography fontSize={13}>Вс 9.00 – 17.00</Typography>
              </Box>

              <Box mt={2}>
                <Typography fontWeight="bold">Выдача заказов (Могилев и Гомель)</Typography>
                <Typography fontSize={13}>Пн–Сб 9.00 – 19.00</Typography>
                <Typography fontSize={13}>Вс 9.00 – 17.00</Typography>
              </Box>
            </Stack>
          </Box>

          {/* Ссылки + соцсети */}
          <Box
            sx={{
              display: 'flex',
              flex: '1 1 700px',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              rowGap: 4,
              minWidth: '700px',
            }}
          >
            {footerLinks.map((block, i) => (
              <Box key={i} sx={{ minWidth: 140 }}>
                <Typography fontWeight="bold" gutterBottom>
                  {block.title}
                </Typography>
                {block.items.map((text, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    underline="hover"
                    display="block"
                    color="text.secondary"
                    fontSize={14}
                    sx={{ mb: 0.5 }}
                  >
                    {text}
                  </Link>
                ))}
              </Box>
            ))}

            <Box sx={{ minWidth: 160 }}>
              <Typography fontWeight="bold" gutterBottom>
                Мы в соц. сетях
              </Typography>
              <Stack direction="row" spacing={1}>
                <TelegramIcon fontSize="small" />
                <img src="https://img.icons8.com/ios-filled/20/000000/vk-com.png" alt="vk" />
                <img src="https://img.icons8.com/ios-filled/20/000000/youtube-play.png" alt="youtube" />
                <img src="https://img.icons8.com/ios-filled/20/000000/instagram-new.png" alt="insta" />
              </Stack>
            </Box>
          </Box>
        </Box>

        {/* Рейтинг */}
        <Box display="flex" justifyContent="flex-end" mt={4}>
          <Box
            sx={{
              background: '#fff',
              px: 2,
              py: 1,
              borderRadius: 1,
              boxShadow: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography>Рейтинг магазина:</Typography>
            <StarIcon sx={{ color: '#f7941e' }} />
            <Typography fontWeight="bold">4.9 из 5</Typography>
            <Typography fontSize={14}>1255 Отзывов</Typography>
          </Box>
        </Box>
      </Container>

      <Divider sx={{ mt: 4 }} />

      {/* 🔽 Нижняя часть футера */}
      <Container sx={{ py: 4, fontSize: 13 }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: 4,
            color: 'text.secondary',
          }}
        >
          {/* Юр блок */}
          <Box sx={{ flex: '1 1 65%' }}>
            <Typography>
              2020 © autoostrov.by •{' '}
              <Link href="mailto:zakaz@autoostrov.by">zakaz@autoostrov.by</Link>
            </Typography>
            <Typography>
              Общество с ограниченной ответственностью «Ластади-М», 220076, г. Минск, ул. Петра Мстиславца, дом 5, офис 206, УНП 192793177.
            </Typography>
            <Typography>
              Кусков Сергей Викторович{' '}
              <Box component="span" fontWeight="bold">+375-44-731-25-77</Box>{' '}
              Электронная почта <Box component="span" fontWeight="bold">375297772657@mail.ru</Box> — лицо, уполномоченное...
            </Typography>
            <Typography>
              Отдел торговли и услуг администрации Первомайского района города Минска: ...
            </Typography>

            {/* Платёжки */}
            <Box mt={2} sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              <img height={20} src="https://img.icons8.com/color/48/visa.png" alt="visa" />
              <img height={20} src="https://img.icons8.com/color/48/mastercard-logo.png" alt="mastercard" />
              <img height={20} src="https://img.icons8.com/color/48/oplaty.png" alt="оплаты" />
              <img height={20} src="https://img.icons8.com/color/48/000000/apple-pay.png" alt="apple-pay" />
              <img height={20} src="https://img.icons8.com/color/48/karta.png" alt="карта" />
              <img height={20} src="https://img.icons8.com/color/48/000000/paypal.png" alt="paypal" />
            </Box>
          </Box>

          {/* Логотип */}
          <Box sx={{ textAlign: 'center' }}>
            <img src="https://www.adata.com/media/3057/logo.png" alt="ADATA" height={40} />
            <Typography fontSize={12}>Разработка магазина автозапчастей</Typography>
          </Box>
        </Box>
      </Container>
      <Box sx={{ height: 54, bgcolor: '#2B2A4A' }} />
    </Box>
  );
};

export default Footer;