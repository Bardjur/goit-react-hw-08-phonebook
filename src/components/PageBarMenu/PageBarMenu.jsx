import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Link,
  Button
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const pages = [{name:"Login", link:"login"}, {name:"Register", link:"register"}];

export default function PageBarMenu() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpen = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          onClick={handleOpen}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleClose}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page.name} onClick={handleClose}>
              <Link
                component={RouterLink}
                to={page.link}
                underline="none"
                textAlign="center"
                sx={{ color: "inherit" }}>
                
                {page.name}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page.name}
            component={RouterLink}
            to={page.link}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            {page.name}
          </Button>
        ))}
      </Box>
    </>
  )
}
