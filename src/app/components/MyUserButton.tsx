"use client";
import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Avatar, makeStyles } from "@mui/material/";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useClerk, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

// const user = {
//   avatar:
//     "https://i.pinimg.com/originals/17/f3/9c/17f39c6f7a4a5457f39dba2368f0d077.jpg",
//   name: "Kevin Samuels",
// };

const useStyles = () => {
  const root = {};
  const avatar = {
    height: 50,
    width: 50,
  };
  return { root, avatar };
};

export default function MyUserButton() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useClerk();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    router.push("/updates");
    setAnchorEl(null);
  };
  const accountClicked = () => {
    router.push("/account");
    setAnchorEl(null);
  };
  const logoutClicked = () => {
    console.log("call logout func");

    signOut();
    router.push("/");
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <Button
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={handleClick}
          startIcon={<ArrowDropDownIcon />}
        >
          {user?.fullName}
          <Avatar className={"ml-2 shadow-lg"} src={user?.imageUrl} />
        </Button>
      </div>

      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
        <MenuItem onClick={accountClicked}>My account</MenuItem>
        <MenuItem onClick={logoutClicked}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
