import React, { useState } from "react";
import { Box, Button, MobileStepper, Typography } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

// Временно используем статику, потом подключим из CMS/API
const sliderItems = [
  {
    label: "Щётки и скребки",
    image: "/slider/slider1.jpg",
  },
  {
    label: "Автохимия Patron",
    image: "/slider/slider2.jpg",
  },
];

const HeroSlider = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = sliderItems.length;

  const handleNext = () => setActiveStep((prev) => Math.min(prev + 1, maxSteps - 1));
  const handleBack = () => setActiveStep((prev) => Math.max(prev - 1, 0));

  return (
    <Box sx={{ position: "relative", overflow: "hidden", bgcolor: "#f3f3f3" }}>
      <SwipeableViews index={activeStep} onChangeIndex={setActiveStep} enableMouseEvents>
        {sliderItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              height: { xs: 300, md: 450 },
              position: "relative",
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                bottom: 30,
                left: 30,
                bgcolor: "rgba(0,0,0,0.5)",
                p: 2,
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" color="white">
                {item.label}
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 1, bgcolor: "#f57c00", "&:hover": { bgcolor: "#ef6c00" } }}
              >
                Выбрать
              </Button>
            </Box>
          </Box>
        ))}
      </SwipeableViews>

      {/* Навигация */}
      <Box sx={{ position: "absolute", top: "50%", left: 16, transform: "translateY(-50%)" }}>
        <Button onClick={handleBack} disabled={activeStep === 0}>
          <KeyboardArrowLeft sx={{ color: "#fff" }} />
        </Button>
      </Box>
      <Box sx={{ position: "absolute", top: "50%", right: 16, transform: "translateY(-50%)" }}>
        <Button onClick={handleNext} disabled={activeStep === maxSteps - 1}>
          <KeyboardArrowRight sx={{ color: "#fff" }} />
        </Button>
      </Box>

      {/* Индикаторы */}
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          position: "absolute",
          bottom: 10,
          width: "100%",
          justifyContent: "center",
          background: "transparent",
        }}
        nextButton={null}
        backButton={null}
      />
    </Box>
  );
};

export default HeroSlider;