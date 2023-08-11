import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import ResponsiveAppBar from "./appbar";
import Sidebar from "./sidebar";

// Define the sidebar items

const Layout = ({ children }: any) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <ResponsiveAppBar sidebar={sidebar} setSidebar={setSidebar} />
      <Box sx={{ display: "flex" }}>
        {sidebar && (
          <Box
            sx={{
              width: 250,
              height: "calc(100vh - 64px)",
              overflow: "auto",
              backgroundColor: "#263238",
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
