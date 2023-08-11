import Head from "next/head";
import React from "react";
import Linechart from "@/components/dashboard-components/areachart";
import Barchart from "@/components/dashboard-components/barchart";
import Layout from "@/components/layout";
import { Box } from "@mui/material";
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingY: 1,
            }}
          >
            {items.map((item, index) => (
              <Card
                key={index}
                caption={item.caption}
                figure={item.figure}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: "50%", marginRight: 2 }}>
              <Linechart />
            </Box>
            <Box sx={{ width: "49%" }}>
              <Barchart />
            </Box>
          </Box>
        </Layout>
      </main>
    </>
  );
};

export default Dashboard;
