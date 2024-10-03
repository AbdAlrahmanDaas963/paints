import { Box, Stack, Typography, Button } from "@mui/material";
import theme from "../theme";

function AdsSection() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"90vh"}
      sx={{
        padding: { lg: "0 200px", md: "", sm: "", xs: "" },
        border: "1px dotted grey",
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
      ></Box>
    </Stack>
  );
}

export default AdsSection;
