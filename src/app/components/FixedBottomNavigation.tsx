"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRouter } from "next/navigation";
import DashboardIcon from "@mui/icons-material/Dashboard";

export default function SimpleBottomNavigation() {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderTop: "2px solid #eaeaea",
      }}
    >
      <BottomNavigation
        sx={{
          backgroundColor: "#1976d2",

        }}
        showLabels
        // value={value}
        onChange={(event, newValue) => {
          // setValue(newValue);
          // ((value: any) => console.log(value))(newValue);
          router.push(newValue);
        }}
      >
        <BottomNavigationAction
          sx={{
            color: "#fff",
          }}
          value={"/recent"}
          label="Recent"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          sx={{
            color: "#fff",
          }}
          value={"/updates"}
          label="Updates"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          sx={{
            color: "#fff",
          }}
          value={"/dashboard"}
          label="Dashboard"
          icon={<DashboardIcon />}
        />
        {/* <BottomNavigationAction
          value={"/user"}
          label="username"
          icon={<AccountCircleIcon />}
        /> */}
      </BottomNavigation>
    </Box>
  );
}
