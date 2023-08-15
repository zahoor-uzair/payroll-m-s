import React, { useState, useEffect } from "react";

import { Box } from "@mui/material";
import ResponsiveAppBar from "./appbar";
import Sidebar from "./sidebar";

// Define the sidebar items

const Layout = ({ children }: any) => {
  const [sidebar, setSidebar] = useState(localStorage.getItem("sidebarWidth"));
  console.log(sidebar);
  useEffect(() => {
    // setSidebar(localStorage.getItem("sidebarWidth"));
    setSidebar(localStorage.getItem("sidebarWidth"));
  }, [sidebar]);
  return (
    <>
      <ResponsiveAppBar sidebar={sidebar} setSidebar={setSidebar} />
      <Box sx={{ display: "flex" }}>
        {sidebar && (
          <Box
            sx={{
              width: 260,
              height: "calc(100vh - 64px)",
              overflow: "verticle",
              // backgroundColor: "#263238",
              backgroundColor: "#0f0c29",
              color: "#ffffff",
            }}
          >
            <Sidebar />
          </Box>
        )}
        <Box
          sx={{
            flexGrow: 1,
            padding: 2,
            height: "calc(100vh - 64px)",
            overflow: "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
