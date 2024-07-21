import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import LoginIcon from "@mui/icons-material/Login";
import {
  Box,
  Button,
  Card,
  Checkbox,
  TextField,
  Typography,
} from "@mui/material";


import { useLoginMutation } from '../apis/apiSlice';
import useStore  from '../store';
import useCustomNavigate from '../hooks/useCustomNavigate';
import { flexBetween,flexCenter,AuthBox } from '../styles-components';

const LoginPage = () => {
  const [login, { isLoading }] = useLoginMutation();
  const setUserAuthenticated = useStore((state) => state.setUserAuthenticated);
  const navigate=useCustomNavigate()
  const formik = useFormik({
    initialValues: {
      email: 'anderson@gmail.com',
      password: 'subhan123',
      rememberMe: true,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const user = await login({ email: values.email, password: values.password }).unwrap();
        console.log("user response",user)
       setUserAuthenticated(user);
        navigate("/")
      } catch (error) {
        console.error('Failed to login:', error);
      }
    },
  });

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

        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ width: "500px", marginTop: "2rem" }}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email Address"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Box>
          <Box sx={{ width: "500px", marginTop: "1rem" }}>
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
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
              <Checkbox
                id="rememberMe"
                name="rememberMe"
                checked={formik.values.rememberMe}
                onChange={formik.handleChange}
              />
              Keep me signed in
            </Typography>
            <Typography variant="subtitle" sx={{ color: "var(--link-color)" }}>
              Forgot Password?
            </Typography>
          </Box>

          <Box sx={{ width: "500px", marginTop: "2rem" }}>
            <Button
              type="submit"
              sx={{ width: "100%", background: "var(--link-color)" }}
              size="large"
              variant="contained"
              endIcon={<LoginIcon />}
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </Box>
        </form>
      </Card>
    </AuthBox>
  );
};

export default LoginPage;
