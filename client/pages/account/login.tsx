import React from "react";
import Head from "next/head";
import Login from "@/components/login";
const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Payroll MS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="login">
        <Login />
      </main>
    </>
  );
};

export default LoginPage;
