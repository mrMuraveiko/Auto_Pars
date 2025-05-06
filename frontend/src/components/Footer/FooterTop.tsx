import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const FooterTop = () => {
  return (
    <Box sx={{ backgroundColor: '#f7f7f7', borderTop: '1px solid #ddd', pt: 4, pb: 2 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Contacts & Buttons */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Image src="/icons/life.svg" alt="life" width={24} height={24} />
              <Typography sx={{ ml: 1 }}>
                <Box component="span" fontWeight="bold">8 (029)</Box> 111-11-11
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Image src="/icons/a1.svg" alt="a1" width={24} height={24} />
              <Typography sx={{ ml: 1 }}>
                <Box component="span" fontWeight="bold">8 (044)</Box> 111-11-11
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <Button variant="contained" sx={{ backgroundColor: '#1C2340' }}>Перезвонить</Button>
              <Button variant="contained" sx={{ backgroundColor: '#ff7e2f' }}>Написать руководству</Button>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Image src="/icons/24.svg" alt="24h" width={32} height={32} />
              <Typography sx={{ fontWeight: 'bold', ml: 1 }}>
                Онлайн заказы принимаются круглосуточно
              </Typography>
            </Box>
            <Box>
              <Typography fontWeight="bold">Обработка заказов</Typography>
              <Typography>Понедельник – Пятница 9.00 – 21.00</Typography>
              <Typography>Суббота 9.00 – 19.00</Typography>
              <Typography>Воскресенье 9.00 – 17.00</Typography>
            </Box>
            <Box mt={2}>
              <Typography fontWeight="bold">Выдача заказов (Минск и Гродно)</Typography>
              <Typography>Понедельник – Пятница 9.00 – 21.00</Typography>
              <Typography>Суббота 9.00 – 19.00</Typography>
              <Typography>Воскресенье 9.00 – 17.00</Typography>
            </Box>
            <Box mt={2}>
              <Typography fontWeight="bold">Выдача заказов (Могилев и Гомель)</Typography>
              <Typography>Понедельник – Суббота 9.00 – 19.00</Typography>
              <Typography>Воскресенье 9.00 – 17.00</Typography>
            </Box>
          </Grid>

          {/* Navigation */}
          <Grid item xs={12} md={9}>
            <Grid container spacing={2}>
              {[
                { title: 'Помощь', items: ['Все марки авто', 'Запрос по VIN', 'Карта сайта', 'Прайс-лист', 'Шинный калькулятор'] },
                { title: 'О магазине', items: ['О компании', 'Контакты', 'Отзывы клиентов', 'Новости', 'Статьи', 'Вопрос-ответ', 'Вакансии'] },
                { title: 'Покупателям', items: ['Система скидок', 'Партнерская программа', 'Способы оплаты', 'Гарантия', 'Возврат товара', 'Публичная оферта', 'Обработка файлов cookies', 'Обработка персональных данных', 'Обращения потребителей'] },
                { title: 'Профиль', items: ['Вход', 'Регистрация'] },
              ].map((section, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Typography fontWeight="bold" mb={1}>{section.title}</Typography>
                  {section.items.map((item, i) => (
                    <Typography key={i}>{item}</Typography>
                  ))}
                </Grid>
              ))}

              {/* Social & Rating */}
              <Grid item xs={12} sm={6} md={3}>
                <Typography fontWeight="bold" mb={1}>Мы в соц. сетях</Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  {['vk', 'youtube', 'instagram', 'telegram'].map((icon, i) => (
                    <Image
                      key={i}
                      src={`/icons/${icon}.svg`}
                      alt={icon}
                      width={24}
                      height={24}
                    />
                  ))}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Box sx={{
                    backgroundColor: '#fff',
                    borderRadius: 1,
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                    px: 2,
                    py: 1
                  }}>
                    <Typography>
                      Рейтинг магазина: <Box component="span" fontWeight="bold" color="error.main">★ 4.9</Box> из 5 — 1255 Отзывов
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ borderBottom: '1px solid #ddd', mt: 4 }} />
      </Container>
    </Box>
  );
};

export default FooterTop;
