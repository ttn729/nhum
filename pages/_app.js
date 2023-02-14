import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <Box>
      <Navbar/>
      <Component {...pageProps} />
    </Box>
  );
}
