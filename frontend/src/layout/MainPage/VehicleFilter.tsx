import React, { useState } from "react";
import {
  Box,
  Stack,
  Tab,
  Tabs,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

const VehicleFilter = () => {
  const [tab, setTab] = useState(0);
  const [filters, setFilters] = useState({
    year: "",
    brand: "",
    model: "",
    body: "",
    engine: "",
    modification: "",
  });
  const [mode, setMode] = useState<"mine" | "all">("all");

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const handleChange = (field: string) => (event: SelectChangeEvent) => {
    setFilters({ ...filters, [field]: event.target.value });
  };

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={1}>
        Популярные категории запчастей
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        Выбор автомобиля позволяет отобразить только те запчасти, которые подходят к вашему автомобилю
      </Typography>

      <Box
        sx={{
          bgcolor: "#2B2A4A",
          borderRadius: 1,
          p: 2,
          color: "#fff",
        }}
      >
        {/* Tabs */}
        <Tabs
          value={tab}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="secondary"
          sx={{ mb: 2 }}
        >
          <Tab label="По авто" />
          <Tab label="По номеру запчасти" />
        </Tabs>

        {/* Dropdown filters */}
        {tab === 0 && (
          <Stack direction="row" spacing={2} flexWrap="wrap">
            {[
              { label: "Год выпуска", key: "year" },
              { label: "Марка", key: "brand" },
              { label: "Модель", key: "model" },
              { label: "Кузов", key: "body" },
              { label: "Двигатель", key: "engine" },
              { label: "Модификация", key: "modification" },
            ].map(({ label, key }) => (
              <Select
                key={key}
                value={filters[key as keyof typeof filters]}
                onChange={handleChange(key)}
                displayEmpty
                sx={{ bgcolor: "#fff", color: "#000", minWidth: 180 }}
              >
                <MenuItem value="">{label}</MenuItem>
                <MenuItem value="demo1">Demo 1</MenuItem>
                <MenuItem value="demo2">Demo 2</MenuItem>
              </Select>
            ))}
          </Stack>
        )}

        {/* Переключатель */}
        {tab === 0 && (
          <Box mt={2}>
            <ToggleButtonGroup
              value={mode}
              exclusive
              onChange={(_, newMode) => newMode && setMode(newMode)}
              sx={{
                "& .MuiToggleButton-root": {
                  color: "#fff",
                  borderColor: "#fff",
                },
                "& .Mui-selected": {
                  bgcolor: "#f57c00",
                  color: "#fff",
                },
              }}
            >
              <ToggleButton value="mine">Моё авто</ToggleButton>
              <ToggleButton value="all">Все марки</ToggleButton>
            </ToggleButtonGroup>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default VehicleFilter;