import React from "react";
import { Card as MuiCard, CardContent, Typography, Icon } from "@mui/material";

const Card = ({ title, figure, caption, icon }: any) => {
  return (
    <MuiCard
      sx={{
        width: 250,
        height: 170,
        display: "flex",
        flexDirection: "column",
        margin: 1,
        borderRadius: 2,
        boxShadow: 2,
        backgroundColor: "primary.main",
      }}
    >
      <CardContent>
        <Icon sx={{ color: "secondary.main", marginBottom: 0 }}>{icon}</Icon>
        <Typography
          sx={{ marginBottom: 0, color: "secondary.main" }}
          variant="h5"
        >
          {title}
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: 0,
            color: "secondary.main",
          }}
        >
          {figure}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontSize: "0.875rem", color: "secondary.main" }}
        >
          {caption}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
