import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import Link from "next/link";
import { userService } from "./user";
import { useRouter } from "next/router";

interface User {
  name: string;
  fname: string;
  email: string;
  password: string;
}

const SignIn = ({ setSignin }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  // const handleLogin = (e: any) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   const formData: User = { email, password, name, fname };
  //   return userService.register(formData).then(() => {
  //     setIsLoading(false);
  //     router.push("/account/login");
  //   });
  // };
  const handleLogin = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("name", name);
    formData.append("fname", fname);

    if (imageFile) {
      formData.append("image", imageFile);
    }

    userService.register(formData).then(() => {
      setIsLoading(false);
      router.push("/account/login");
    });
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h5" sx={{ textAlign: "center" }} gutterBottom>
          SignIn
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Name"
            fullWidth
            value={name}
            onChange={(e: any) => setName(e.target.value)}
            margin="normal"
            size="small"
            required
          />
          <TextField
            label="Father Name"
            fullWidth
            value={fname}
            onChange={(e: any) => setFname(e.target.value)}
            margin="normal"
            size="small"
            required
          />
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
          <input
            accept="image/*"
            id="image-upload"
            type="file"
            onChange={(e: any) => setImageFile(e.target.files[0])}
            style={{ display: "none" }}
          />
          <label htmlFor="image-upload">
            <Button
              variant="contained"
              component="span"
              fullWidth
              sx={{ marginY: 1 }}
            >
              Upload Image
            </Button>
          </label>

          <Button
            variant="contained"
            disabled={isLoading}
            color="primary"
            fullWidth
            type="submit"
            sx={{ marginY: 1 }}
          >
            {isLoading ? "Loadind..." : "SignIn"}
          </Button>
        </form>
        <Box marginTop={1}>
          <Link className="acc-link" href={"/account/login"}>
            Already have an account: Log in
          </Link>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignIn;
