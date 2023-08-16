import React from "react";
import { useRouter } from "next/router";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

const sidebarItems = [
  { text: "Dashboard", link: "/", icon: <DashboardIcon /> },
  { text: "Employee", link: "/employee", icon: <PeopleIcon /> },
  { text: "Attendance", link: "/attendance", icon: <AppRegistrationIcon /> },
  { text: "Reports", link: "/reports", icon: <AssessmentIcon /> },
  { text: "Settings", link: "/setting", icon: <SettingsIcon /> },
];
const Sidebar = () => {
  const router = useRouter();
  return (
    <List>
      {sidebarItems.map((item, index) => (
        <ListItem
          key={index}
          button
          onClick={() => router.push(item.link)}
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "12px 16px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#37474E",
            },
          }}
        >
          {item.icon} {/* Icon */}
          <ListItemText
            primary={item.text}
            sx={{
              marginLeft: 2,
              fontWeight: "bold",
              fontSize: 16,
              color: "#FFFFFF",
            }}
          />{" "}
          {/* Text */}
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;
