import React from "react";

import { Box, Stack, Typography, Button } from "@mui/material";
import theme from "../../theme";
import starry from "../../assets/starry.png";

function ThanksSection() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box sx={{ width: "100%", height: "100%", position: "absolute" }}>
        <img
          src={starry}
          style={{
            backgroundSize: "cover",
            height: "100%",
            backgroundPosition: "center",
            minWidth: "100vw",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          background:
            "linear-gradient(0deg, rgba(29,53,87,0) 0%, rgba(29,53,87,1) 100%)",
        }}
      ></Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            ...theme.typography.kalam,
            color: theme.palette.fourth.main,
            fontSize: { lg: "70px", md: "60px", sm: "50px", xs: "40px" },
          }}
        >
          Thanks for visiting
        </Typography>
      </Box>
    </Box>
  );
}

export default ThanksSection;
