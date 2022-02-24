import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppNavBarCustom from "./AppNavBar";

const NavBar = ({ theme, currentPage }) => {
  const [color, setColor] = useState("primary");

  const navigate = useNavigate();

  // Pages on navbar. Selected parameter for determining which page user currently on.
  const [pages, setPages] = useState([
    { id: 1, name: "Dashboard", selected: false, link: "/", type: "link" },
    { id: 2, name: "All Properties", selected: false, link: "/", type: "link" },
    {
      id: 3,
      name: "Tenancy Applications",
      selected: false,
      link: "/",
      type: "link",
    },
    {
      id: 4,
      name: "Viewing Arrangements",
      selected: false,
      link: "/",
      type: "link",
    },
    // { id: 5, name: "Reviews", selected: false, link: "/", type: "link" },
    { id: 6, name: "Users", selected: false, link: "/", type: "link" },
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
                    <Button>{page.name}</Button>
                  ) : (
                    <Button>{page.name}</Button>
                  )}
                </>
              );
            })}
          </Box>
          <Typography>Hello?</Typography>
        </>
      </Grid>
    </AppNavBarCustom>
  );
};
export default NavBar;
