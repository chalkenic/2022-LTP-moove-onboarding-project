import React, { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import * as NavText from "../assets/NavTexts";

const NavBar = (props) => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          NavText.navTextLeftUpper.drawerHome,
          NavText.navTextLeftUpper.drawer1,
          NavText.navTextLeftUpper.drawer2,
          NavText.navTextLeftUpper.drawer3,
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 ? (
                <HomeIcon />
              ) : (
                <>
                  {index === 3 ? (
                    <CalendarTodayIcon />
                  ) : (
                    <> {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</>
                  )}
                </>
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          NavText.navTextLeftLower.drawer4,
          NavText.navTextLeftLower.drawer5,
          NavText.navTextLeftLower.drawerLogout,
        ].map((text, index, arr) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {arr.length - 1 === index ? (
                <LogoutIcon />
              ) : (
                <>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</>
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {/* {["left"].map((anchor) => ( */}
      <Fragment key={NavText.navTextNavigation.anchor}>
        <Button onClick={toggleDrawer(NavText.navTextNavigation.anchor, true)}>
          {NavText.navTextNavigation.navButton}
        </Button>
        <Drawer
          anchor={NavText.navTextNavigation.anchor}
          open={state[NavText.navTextNavigation.anchor]}
          onClose={toggleDrawer(NavText.navTextNavigation.anchor, false)}
        >
          {list(NavText.navTextNavigation.anchor)}
        </Drawer>
      </Fragment>
      {/* ))} */}
    </div>
  );
};

export default NavBar;
