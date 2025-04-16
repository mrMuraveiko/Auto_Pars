import { Box, Button, Container, Stack } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Link as RouterLink } from 'react-router-dom';

const HeaderNav = () => (
  <Box sx={{ bgcolor: "#f3f4f6", py: 1 }}>
    <Container maxWidth="xl">
      <Stack direction="row" spacing={3}>
        <Button
          component={RouterLink}
          to="/catalog"
          startIcon={<MenuBookIcon />}
          sx={{ color: "#2b2a4a", textTransform: "none" }}
        >
          Каталог товаров
        </Button>
        <Button
          component={RouterLink}
          to="/catalog-by-brand"
          startIcon={<PeopleAltIcon />}
          sx={{ color: "#2b2a4a", textTransform: "none" }}
        >
          Каталог по маркам
        </Button>
      </Stack>
    </Container>
  </Box>
);

export default HeaderNav;