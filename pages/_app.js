import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const showNavbar = (router.pathname === '/viewQuestions' || router.pathname === '/') ? false : true;

  return (
    <Box>
      {showNavbar && <Navbar/>}
      <Component {...pageProps} />
    </Box>
  );
}
