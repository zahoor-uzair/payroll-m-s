import React from "react";
import { Grid, Button } from "@mui/material";
import { checkIn } from "./api";
const CheckInOut = () => {
  return (
    <>
      <Grid container>
        <Button
          variant="contained"
          sx={{ marginX: 1 }}
          onClick={() => checkIn()}
        >
          Check In
        </Button>
        <Button variant="contained" sx={{ marginX: 1 }}>
          Check Out
        </Button>
      </Grid>
    </>
  );
};

export default CheckInOut;
