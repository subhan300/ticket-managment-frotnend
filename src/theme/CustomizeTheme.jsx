import { CssBaseline, StyledEngineProvider, createTheme } from "@mui/material";
import Typography from "./Typography";
import { useMemo } from "react";
import Palette from "./palette";
import { ThemeProvider } from "styled-components";
import CustomShadows from "./shadows";

export const theme = createTheme({
  spacing: 4,
  breakpoints: {
    values: {
      xs: 0,
      sm: 769,  // Change sm to 768px
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography:Typography(`Montserrat, Arial, sans-serif'`),
  palette: Palette('light', 'default').palette,
  // customShadows: CustomShadows(theme),
  
  components: {
    MuiStat: {
      styleOverrides: {
        root: {
          backgroundColor: "#121212",
        },
        value: {
          color: "#fff",
        },
        unit: {
          color: "#888",
        },
      },
    },
  },
});

