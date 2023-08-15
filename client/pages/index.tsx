import Head from "next/head";
import React from "react";
import Linechart from "@/components/dashboard-components/areachart";
import Barchart from "@/components/dashboard-components/barchart";
import Layout from "@/components/layout";
import { Grid } from "@mui/material";
import Card from "@/components/dashboard-components/card";
import PeopleIcon from "@mui/icons-material/People";
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
      <Head>
        <title>Payroll MS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Layout>
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
        </Layout>
      </main>
    </>
  );
};

export default Dashboard;
