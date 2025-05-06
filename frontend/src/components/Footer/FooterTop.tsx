import { Box, Typography, Button, Grid, Stack } from "@mui/material";

const FooterTop = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f6f6f7",
        px: { xs: 2, md: 10 },
        py: 5,
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Grid container spacing={4}>
        {/* Блок телефонов и кнопки */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <Typography>
              <img src="/icons/life.svg" alt="life" style={{ marginRight: 8 }} />
              <b>8 (029)</b> <strong>111-11-11</strong>
            </Typography>
            <Typography>
              <img src="/icons/a1.svg" alt="a1" style={{ marginRight: 8 }} />
              <b>8 (044)</b> <strong>111-11-11</strong>
            </Typography>

            <Stack direction="row" spacing={2} mt={2}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#1c1c57",
                  "&:hover": { backgroundColor: "#161642" },
                  borderRadius: "6px",
                  px: 3,
                }}
              >
                Перезвонить
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff7f32",
                  "&:hover": { backgroundColor: "#e0661c" },
                  borderRadius: "6px",
                  px: 3,
                }}
              >
                Написать руководству
              </Button>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1} mt={3}>
              <img src="/icons/24h.svg" alt="24h" width={32} />
              <Typography fontWeight="bold">
                Онлайн заказы принимаются круглосуточно
              </Typography>
            </Stack>

            <Box mt={2}>
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
          </Stack>
        </Grid>

        {/* Колонки с навигацией */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={4}>
            {[
              {
                title: "Помощь",
                items: [
                  "Все марки авто",
                  "Запрос по VIN",
                  "Карта сайта",
                  "Прайс-лист",
                  "Шинный калькулятор",
                ],
              },
              {
                title: "О магазине",
                items: [
                  "О компании",
                  "Контакты",
                  "Отзывы клиентов",
                  "Новости",
                  "Статьи",
                  "Вопрос-ответ",
                  "Вакансии",
                ],
              },
              {
                title: "Покупателям",
                items: [
                  "Система скидок",
                  "Партнёрская программа",
                  "Способы оплаты",
                  "Гарантия",
                  "Возврат товара",
                  "Публичная оферта",
                  "Обработка файлов cookies",
                  "Обработка персональных данных",
                  "Обращения потребителей",
                ],
              },
              {
                title: "Профиль",
                items: ["Вход", "Регистрация"],
                social: true,
              },
            ].map((col, idx) => (
              <Grid item xs={6} md={3} key={idx}>
                <Typography fontWeight="bold" mb={1}>
                  {col.title}
                </Typography>
                {col.items.map((item, i) => (
                  <Typography key={i} variant="body2" sx={{ mb: 0.5 }}>
                    {item}
                  </Typography>
                ))}
                {col.social && (
                  <Stack direction="row" spacing={1} mt={1}>
                    <img src="/icons/vk.svg" alt="vk" width={20} />
                    <img src="/icons/youtube.svg" alt="youtube" width={20} />
                    <img src="/icons/instagram.svg" alt="instagram" width={20} />
                    <img src="/icons/telegram.svg" alt="telegram" width={20} />
                  </Stack>
                )}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FooterTop;