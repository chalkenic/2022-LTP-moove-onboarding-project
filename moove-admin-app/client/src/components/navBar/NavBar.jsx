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
import NavBarHeader from "../headers/NavBarHeader";

const NavBar = ({ currentPage, navigationColor }) => {
  const [navColorChoice, setNavColor] = useState(navigationColor);
  let navOptions = "";

  if (navigationColor === "admin") {
    navOptions = navTextAdmin;
  } else if (navigationColor === "landlord") {
    navOptions = navTextLandlord;
  } else {
    navOptions = navTextTenant;
  }

  const navigate = useNavigate();

  // Pages on navbar. Selected parameter for determining which page user currently on.
  const [pages, setPages] = useState(navOptions);

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

    <AppNavBarCustom navColor={navColorChoice}>
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <>
          <Box sx={{ display: "flex" }}>
            <img
              alt="moove logo"
              style={{ height: "40px" }}
              src={`${process.env.PUBLIC_URL}/static/images/moove_logo_nobg.png`}
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <NavBarHeader name={navigationColor} />
          </Box>
          <Box sx={{ display: { xs: "none", md: "inline-block" } }}>
            {pages.map((page) => {
              console.log(page);
              return (
                <>
                  {page.selected ? (
                    <ButtonNavCustom
                      to={page.link}
                      navColor={navColorChoice}
                      key={page.key}
                    >
                      {page.name}
                    </ButtonNavCustom>
                  ) : (
                    <ButtonNavCustom
                      to={page.link}
                      navColor={navColorChoice}
                      key={page.key}
                    >
                      {page.name}
                    </ButtonNavCustom>
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
