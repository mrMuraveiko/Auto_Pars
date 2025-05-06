import React from "react";
import { Box } from "@mui/material";
import FooterTop from "./FooterTop"; // убедись, что путь корректен

const Footer = () => {
  return (
    <Box component="footer">
      {/* Верхняя часть футера: "Мы в соц. сетях" */}
      <FooterTop />

      {/* Центральная и нижняя части добавим позже */}
    </Box>
  );
};

export default Footer;