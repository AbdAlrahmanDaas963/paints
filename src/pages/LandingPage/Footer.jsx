import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import theme from "../../theme";

import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import PaletteIcon from "@mui/icons-material/Palette";
import TabFooter from "../../components/common/TabFooter";

function Footer() {
  return (
    <Stack
      sx={{
        position: "relative",
        width: "100%",
        height: { lg: "150px", md: "150px", sm: "500px", xs: "500px" },
        paddingLeft: { lg: "100px", md: "100px", sm: "0px", xs: "0px" },
      }}
      direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"150px"}
    >
      <Stack
        direction={"row"}
        sx={{
          position: "absolute",
          left: { lg: "50px", md: "50px", sm: "50%", xs: "50%" },
          top: { lg: "50%", md: "50%", sm: "50px", xs: "50px" },
          transform: {
            lg: "translateY(-50%)",
            md: "translateY(-50%)",
            sm: "translateX(-50%)",
            xs: "translateX(-50%)",
          },
        }}
      >
        <PaletteIcon htmlColor={theme.palette.fith.main} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,

            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: theme.palette.fith.main, // Use theme secondary color for the text
            textDecoration: "none",
            ...theme.typography.kalam,
          }}
        >
          Paint
        </Typography>
      </Stack>
      <Stack
        direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
        gap={"15px"}
      >
        <TabFooter title={"LinkedIn"} link={""} />
        <TabFooter title={"Dribbble"} link={""} />
        <TabFooter title={"Myspace"} link={""} />
        <TabFooter title={"Git-hub"} link={""} />
        <TabFooter title={"Instagram"} link={""} />
      </Stack>
      <Box
        sx={{
          position: "absolute",
          right: "50px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <ArrowCircleUpIcon fontSize="large" htmlColor="#1D3557" />
      </Box>
    </Stack>
  );
}

export default Footer;
