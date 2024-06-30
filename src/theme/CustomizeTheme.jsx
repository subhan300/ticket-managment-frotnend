import { CssBaseline, StyledEngineProvider, createTheme, outlinedInputClasses } from "@mui/material";
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
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--btn-primary-contained)',
          '&:hover': {
            backgroundColor: 'var(--btn-primary-contained)',
          },
          '&.Mui-disabled': {
            backgroundColor: 'var(--btn-disable)',
            color: 'black',
          },
          // color: 'black',
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
       
        root: {
         
          // backgroundColor: 'red',
          backgroundColor: 'rgb(255, 255, 255)',
          color: 'rgb(38, 38, 38)',
          transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          overflow: 'hidden',
          border: '1px solid rgb(230, 235, 241)',
          borderRadius: '8px',
          boxShadow: 'inherit',
          '&.Mui-checked': {
            color: 'green', // Customize the color when the checkbox is checked
          },
          
        },
      
        cellCheckbox: {
          outline:"none",
          "& .Mui-checked":{
            color: 'green', 
          }
        },
        columnHeaderCheckbox:{
          outline:"none",
          "& .Mui-checked":{
            color: 'green', 
          }
        },
         cell:{
           '&:focus':{
            outline:"none"
           },
           '&:focus-within': {
            outline: 'none',
          },
         },
        columnHeader: {
          '&:focus-within': {
            outline: 'none',
          },
          '&:focus': {
            outline: 'none',
          },
          backgroundColor: '#f5f5f5',
          emptyGroup: {
            backgroundColor: 'red', // Light gray example
          },
          filler:{
            backgroundColor: 'red', 
          }
          // fontSize:"12px"
        },
        
        columnHeaderTitle :{
             fontWeight:"700",
             fontSize:".75rem"
        }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundCcolor:" rgb(255, 255, 255)",
          color:" rgb(38, 38, 38)",
          transition:"box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          overflow: "hidden",
          border:" 1px solid rgb(230, 235, 241)",
          borderRadius:" 8px",
          boxShadow: "inherit",
        },
      },
    },
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
    MuiTextField: {
      styleOverrides: {
        root: {
          width:"100%",
          '--TextField-brandBorderColor': '#E0E3E7',
          '--TextField-brandBorderHoverColor': '#B2BAC2',
          '--TextField-brandBorderFocusedColor': '#6F7E8C',
          '& label.Mui-focused': {
            color: 'var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      
      styleOverrides: {
        notchedOutline: {
          borderColor: 'var(--TextField-brandBorderColor)',
        },
        root: {
           width:"100%",
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'var(--TextField-brandBorderHoverColor)',
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },
  },
});

