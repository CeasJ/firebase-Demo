"use client";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import React from "react";
import { FacebookIcon, GoogleIcon } from "@/static/assets/icons/CustomIcons";

const SignInComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 2,
      }}
    >
      <Card
        variant="outlined"
        sx={{
          width: "100%",
          maxWidth: 400,
          padding: 4,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "clamp(2rem, 10vw, 2.15rem)",
            marginBottom: 2,
          }}
        >
          Sign in
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <FormControl fullWidth>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              autoFocus
              required
              fullWidth
              variant="outlined"
            />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel htmlFor="password">Password</FormLabel>
            <TextField
              name="password"
              placeholder="••••••"
              type="password"
              id="password"
              autoComplete="current-password"
              required
              fullWidth
              variant="outlined"
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              paddingY: 1.5,
              backgroundColor: "#1976d2",
              "&:hover": { backgroundColor: "#115293" },
            }}
          >
            Sign in
          </Button>
          <Link
            component="button"
            type="button"
            variant="body2"
            sx={{ alignSelf: "center", color: "primary.main" }}
          >
            Forgot your password?
          </Link>
        </Box>
        <Divider sx={{ marginY: 3 }}>or</Divider>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{ paddingY: 1.2 }}
          >
            Sign in with Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<FacebookIcon />}
            sx={{ paddingY: 1.2 }}
          >
            Sign in with Facebook
          </Button>
          <Typography sx={{ textAlign: "center", marginTop: 2 }}>
            Don&apos;t have an account?{" "}
            <Link
              href="/material-ui/getting-started/templates/sign-in/"
              variant="body2"
              sx={{ color: "primary.main", fontWeight: "bold" }}
            >
              Sign up
            </Link>
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};
export default SignInComponent;
