// SectionContainer.js
import React from "react";
import { Box } from "@mui/material";

const SectionContainer = ({
  children,
  minHeight = "100vh",
  padding = "0",
  backgroundColor,
}) => {
  return (
    <Box
      sx={{
        minHeight: minHeight, // Flexible height based on content (default 100vh)
        padding: padding, // Responsive padding (can be adjusted per section)
        backgroundColor: backgroundColor || "inherit", // Optional background color
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Centers content vertically
        alignItems: "center", // Centers content horizontally
        width: "100%", // Full-width section
      }}
    >
      {children}
    </Box>
  );
};

export default SectionContainer;
