import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import theme from "../../theme";

function TabFooter({ title, link }) {
  return (
    <a href={link}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"15px"}
      >
        <Typography color={theme.palette.primary.main}>{title}</Typography>
        <CallMadeIcon htmlColor={theme.palette.primary.main} />
        {/* <Box
          sx={{
            height: "20px",
            width: "1px",
            backgroundColor: theme.palette.primary.main,
            opacity: "0.5",
          }}
        /> */}
      </Stack>
    </a>
  );
}

export default TabFooter;
