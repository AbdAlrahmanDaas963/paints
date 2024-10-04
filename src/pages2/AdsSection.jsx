import { Box, Stack, Typography, Button } from "@mui/material";
import theme from "../theme";

function AdsSection() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"fit-content"}
      sx={{
        padding: {
          lg: "0 150px",
          md: "0 100px",
          sm: "50px 30px",
          xs: "50px 15px",
        },
        // border: "1px dotted grey",
        backgroundColor: theme.palette.white.main,
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "300px",
          border: "1px solid grey",
          borderRadius: "50px",
          backgroundColor: "#fff",
        }}
      >
        ADs
      </Box>
    </Stack>
  );
}

export default AdsSection;
