import {
    Badge,
    Box,
    Container,
    IconButton,
    InputBase,
    MenuItem,
    Select,
    Stack,
    Toolbar,
    Typography,
  } from '@mui/material';
  import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
  import SearchIcon from '@mui/icons-material/Search';
  import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
  import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
  import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
  import { Link as RouterLink } from 'react-router-dom';
  
  const HeaderMain = () => (
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{ justifyContent: "space-between", py: 2 }}>
        {/* Логотип */}
        <Stack direction="row" alignItems="center" spacing={1}>
          <DirectionsCarIcon fontSize="large" />
          <Typography variant="h6" fontWeight="bold">AutoPars</Typography>
        </Stack>
  
        {/* Поиск */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#fff",
            borderRadius: 1,
            overflow: "hidden",
            flexGrow: 1,
            maxWidth: 700,
            mx: 4,
          }}
        >
          <Select
            defaultValue="Выбрать авто"
            variant="standard"
            disableUnderline
            sx={{
              px: 2,
              minWidth: 140,
              borderRight: "1px solid #ddd",
            }}
          >
            <MenuItem value="Выбрать авто">Выбрать авто</MenuItem>
            <MenuItem value="BMW">BMW</MenuItem>
            <MenuItem value="Audi">Audi</MenuItem>
          </Select>
          <InputBase placeholder="Введите артикул или VIN-код" sx={{ flex: 1, px: 2 }} />
          <IconButton sx={{ px: 2 }}>
            <SearchIcon />
          </IconButton>
        </Box>
  
        {/* Иконки */}
        <Stack direction="row" spacing={2} alignItems="center">
          <HeaderIcon icon={<FavoriteBorderIcon />} label="Избранное" />
          <HeaderIcon icon={<DirectionsCarIcon />} label="Моё авто" />
          <HeaderIcon icon={<PersonOutlineIcon />} label="Войти" to="/login" />
          <HeaderIcon
            icon={<Badge badgeContent={0} color="warning"><ShoppingCartOutlinedIcon /></Badge>}
            label="Корзина"
          />
        </Stack>
      </Toolbar>
    </Container>
  );
  
  const HeaderIcon = ({
    icon,
    label,
    to,
  }: {
    icon: React.ReactNode;
    label: string;
    to?: string;
  }) => (
    <Stack spacing={0} alignItems="center">
      <IconButton sx={{ color: "#fff" }} component={to ? RouterLink : 'button'} to={to}>
        {icon}
      </IconButton>
      <Typography variant="caption">{label}</Typography>
    </Stack>
  );
  
  export default HeaderMain;