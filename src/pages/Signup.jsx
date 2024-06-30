// import React from 'react';
import LoginIcon from "@mui/icons-material/Login";
import {
  Box,
  Button,
  Card,
  Checkbox,
  TextField,
  Typography,
} from "@mui/material";
import { AuthBox } from "../styles-components/sub-pages/pages/LoginStyles";
import {
  flexCenter,
  flexBetween,
} from "../styles-components/global-styles/styles";
import TableComponent from "../components/customTable";
import StatsCard from "../components/statsCard";

const SignupPage = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <AuthBox sx={{}}>
      <Box
        sx={{
          ...flexCenter,
          margin: "4rem 0",
        }}
      >
        <img
          style={{ height: "30px" }}
          src={"https://www.brandbucket.com/images7/head_logo2s.png?"}
        ></img>
      </Box>
      <Card
        sx={{
          padding: "2rem",
          backgroundColor: "rgb(255, 255, 255)",
          color: "rgb(38, 38, 38)",
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          overflow: "hidden",
          border: "none rgb(230, 235, 241)",
          bordeRadius: "8px",
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
        }}
      >
        <Box
          sx={{
            ...flexBetween,
          }}
        >
          <Typography variant="h3">Login</Typography>
          <Typography variant="subtitle">Don't have an account</Typography>
        </Box>

        <Box sx={{ width: "500px", marginTop: "2rem" }}>
          <TextField sx={{}} label="Email Address" />
        </Box>
        <Box sx={{ width: "500px", marginTop: "1rem" }}>
          <TextField sx={{}} label="Password" />
        </Box>

        <Box
          sx={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle">
            <Checkbox {...label} defaultChecked />
            Keep me sign in
          </Typography>
          <Typography variant="subtitle" sx={{ color: "var(--link-color)" }}>
            Forgot Password?
          </Typography>
        </Box>

        <Box sx={{ width: "500px", marginTop: "2rem" }}>
          <Button
            sx={{ width: "100%", background: "var(--link-color)" }}
            size="large"
            variant="contained"
            endIcon={<LoginIcon />}
          >
            Login
          </Button>
        </Box>
      </Card>
    </AuthBox>
  );
};

export default SignupPage;
