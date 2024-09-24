import React from "react";
import { Box } from "@mui/material";
import theme from "../../theme";

function Paint() {
  return (
    <Box
      sx={{
        width: "150px",
        height: "150px",
        borderRadius: "20px",
        bgcolor: theme.palette.fourth.main,
      }}
    >
      Paint
    </Box>
  );
}

export default Paint;
