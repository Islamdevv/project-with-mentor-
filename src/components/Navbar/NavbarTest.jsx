import { Box, IconButton, Link } from "@mui/material";
import React from "react";
import logo from "../../image/up_test.png";
import "./Navbar.css";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const NavbarTest = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  const navigate = useNavigate();
  return (
    <Box id="test_navbar">
      <Box className="container">
        <Box className="test_navbar">
          <img src={logo} alt="test_navbar" />
          <Box className="test_navbar_nav">
            <Box className="test_nav_link">
              <IconButton onClick={() => navigate("/admin")}>
                <AddIcon />
              </IconButton>
              <Link>New & Featured</Link>
              <Link>Men</Link>
              <Link>Women</Link>
              <Link>Kids</Link>
              <Link>Sale</Link>
              <Link>Customise</Link>
              <Link>SNKRS</Link>
            </Box>
            <Box className="test_navbar_icons">
              <Search sx={{ background: "#f5f5f5", borderRadius: "100px" }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton sx={{ p: "5px 0" }}>
                <WorkOutlineIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NavbarTest;
