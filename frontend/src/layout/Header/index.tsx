import { AppBar } from "@mui/material";
import HeaderTop from "./HeaderTop";
import HeaderMain from "./HeaderMain";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <>
      <AppBar position="static" elevation={0} sx={{ bgcolor: "#2c2c4d", color: "#fff" }}>
        <HeaderTop />
        <HeaderMain />
      </AppBar>
      <HeaderNav />
    </>
  );
};

export default Header;