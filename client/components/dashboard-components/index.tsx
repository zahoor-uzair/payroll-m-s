import React from "react";
import { Grid } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import Card from "./card";
import Barchart from "./barchart";
import Linechart from "./areachart";
const items = [
  { caption: "Abc", figure: "20", title: "Employees", icon: <PeopleIcon /> },
  { caption: "Abc", figure: "20", title: "Employees", icon: <PeopleIcon /> },
  { caption: "Abc", figure: "20", title: "Employees", icon: <PeopleIcon /> },
  { caption: "Abc", figure: "20", title: "Employees", icon: <PeopleIcon /> },
  // Add more items as needed
];
const Dashboard = () => {
  return (
    <>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {items.map((item, index) => (
          <Grid key={index} lg={3} md={6} sm={6} xs={12}>
            <Card
              caption={item.caption}
              figure={item.figure}
              title={item.title}
              icon={item.icon}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={7}>
          <Barchart />
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <Linechart />
        </Grid>
      </Grid>
      {/* </Layout> */}
    </>
  );
};

export default Dashboard;
