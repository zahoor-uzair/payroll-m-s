import React from "react";
import { Typography } from "@mui/material";
import Layout from "@/components/layout";
import CheckInOut from "@/components/attendance-components/checkinout";
import Head from "next/head";

const Attendance = () => {
  return (
    <>
      <Head>
        <title>Attendance</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Layout>
          <CheckInOut />
        </Layout>
      </main>
    </>
  );
};

export default Attendance;
