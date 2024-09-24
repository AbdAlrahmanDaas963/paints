import React from "react";
import SectionContainer from "../../components/common/SectionContainer";
import { Box, Stack, Typography, Button } from "@mui/material";
import theme from "../../theme";

function EventsSection() {
  return (
    <SectionContainer minHeight="1100px">
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          border: "2px dotted blue",
          color: theme.palette.fourth.main,
        }}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          sx={{ zIndex: "1", ...theme.typography.katibeh, fontSize: "50px" }}
        >
          Events
        </Typography>
        <Stack sx={{ zIndex: "1" }} direction={"row"} gap={"100px"}>
          <Box
            sx={{
              width: "300px",
              height: "400px",
              backgroundColor: theme.palette.fourth.main,
            }}
          ></Box>
          <Box
            sx={{
              width: "300px",
              height: "400px",
              backgroundColor: theme.palette.fourth.main,
            }}
          ></Box>
          <Box
            sx={{
              width: "300px",
              height: "400px",
              backgroundColor: theme.palette.fourth.main,
            }}
          ></Box>
        </Stack>
      </Stack>
    </SectionContainer>
  );
}

export default EventsSection;
