import { Box } from '@mui/material';
import HeaderTop from './HeaderTop';

const Header = () => {
  return (
    <Box component="header">
      <HeaderTop />
      {/* HeaderBottom, Search, Navigation — позже добавим */}
    </Box>
  );
};

export default Header;