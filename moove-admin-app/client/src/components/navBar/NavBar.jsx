import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppNavBarCustom from "./AppNavBar";
import ButtonNavCustom from "../buttons/ButtonNav";
import {
  navTextAdmin,
  navTextTenant,
  navTextLandlord,
} from "../../assets/texts/NavTexts";

const NavBar = ({ theme, currentPage }) => {
  const [color, setColor] = useState("primary");

  const navigate = useNavigate();

  // Pages on navbar. Selected parameter for determining which page user currently on.
  const [pages, setPages] = useState([
    {
      id: 1,
      name: navTextAdmin.dashboard.name,
      selected: navTextAdmin.dashboard.selected,
      link: navTextAdmin.dashboard.link,
      link: navTextAdmin.dashboard.type,
    },
    {
      id: 2,
      name: navTextAdmin.allProperties.name,
      selected: navTextAdmin.allProperties.selected,
      link: navTextAdmin.allProperties.link,
      link: navTextAdmin.allProperties.type,
    },
    {
      id: 3,
      name: navTextAdmin.applications.name,
      selected: navTextAdmin.applications.selected,
      link: navTextAdmin.applications.link,
      link: navTextAdmin.applications.type,
    },
    {
      id: 4,
      name: navTextAdmin.viewings.name,
      selected: navTextAdmin.viewings.selected,
      link: navTextAdmin.viewings.link,
      link: navTextAdmin.viewings.type,
    },
    // { id: 5, name: "Reviews", selected: false, link: "/", type: "link" },
    {
      id: 5,
      name: navTextAdmin.users.name,
      selected: navTextAdmin.users.selected,
      link: navTextAdmin.users.link,
      link: navTextAdmin.users.type,
    },
  ]);

  // Source current page from parent, assign true value to state within navbar.
  useEffect(() => {
    let pagesUnselected = pages;

    // Reset all current pages before calculation.
    for (let index = 0; index < pages.length; index++) {
      pagesUnselected[index].selected = false;
    }

    // Filter out any page that does not match current page.
    const tempPages = pagesUnselected.filter(
      (value) => value.name !== currentPage
    );
    // Collect any remaining value from array and confirm matches current page.
    const tempPage = pagesUnselected.find(
      (value) => value.name === currentPage
    );

    // If page exists, set as current page and push back into array state.
    if (tempPage) {
      tempPage.selected = true;
      tempPages.push(tempPage);
      tempPages.sort((a, b) => (a.id > b.id ? 1 : -1));
      setPages(tempPages);
    }
  }, [currentPage]);

  const handleCloseNavMenu = (link) => {
    navigate(link);
  };

  return (
    //Custom App bar

    <AppNavBarCustom>
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {pages.map((page) => {
              return (
                <>
                  {page.selected ? (
                    <ButtonNavCustom>{page.name}</ButtonNavCustom>
                  ) : (
                    <ButtonNavCustom>{page.name}</ButtonNavCustom>
                  )}
                </>
              );
            })}
          </Box>
        </>
      </Grid>
    </AppNavBarCustom>
  );
};
export default NavBar;
