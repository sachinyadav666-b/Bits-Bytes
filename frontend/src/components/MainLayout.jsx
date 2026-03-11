import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

import Footer from "./Footer.jsx";
import { Box } from "@mui/material";

export default function MainLayout() {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      {/* Always visible header */}
      <Navbar />
      {/* <HeroSection /> */}
      {/* Dynamic page content */}
      <Box component="main" sx={{ minHeight: "70vh", mt:  8.5  }}>
        <Outlet />  {/*  Page content will render here */}
      </Box>
      {/* Always visible footer */}
      <Footer />
    </Box>
  );
}
