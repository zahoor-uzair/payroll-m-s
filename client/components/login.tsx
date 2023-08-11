import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { userService } from "./user";
const apiUrl = "http://localhost:3008";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    return userService
      .login(email, password)
      .then(() => {
        const returnUrl = (router.query.returnUrl as string) || "/";
        router.push(returnUrl);
        setIsLoading(false);
      })
      .catch((err: any) => {
        toast.error("Invalid credentials. Please try again.");
      });
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h5" sx={{ textAlign: "center" }} gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            margin="normal"
            size="small"
            required
          />
          <TextField
            label="Password"
            fullWidth
            type="password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            margin="normal"
            size="small"
            required
          />
          <Button
            variant="contained"
            disabled={isLoading}
            color="primary"
            fullWidth
            type="submit"
            sx={{ marginY: 1 }}
          >
            {isLoading ? "Loadind..." : "Log In"}
          </Button>
        </form>
        <Box marginTop={1}>
          <Link className="acc-link" href={"/account/signup"}>
            Dont't have an account: Sign up
          </Link>
        </Box>
        <ToastContainer />
      </Paper>
    </Container>
  );
};

export default Login;
