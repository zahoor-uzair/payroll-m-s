import React from "react";
import { Typography, Box, Button } from "@mui/material";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h1"
        color="primary"
        sx={{
          fontSize: "3rem",
          marginBottom: (theme) => theme.spacing(2),
        }}
      >
        Oops, Page not found!
      </Typography>
      <Typography
        variant="h5"
        sx={{
          marginBottom: (theme) => theme.spacing(2),
        }}
      >
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </Typography>
      <Link href="/" passHref>
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginTop: (theme) => theme.spacing(2),
          }}
        >
          Go to Home
        </Button>
      </Link>
    </Box>
  );
};

export default PageNotFound;
