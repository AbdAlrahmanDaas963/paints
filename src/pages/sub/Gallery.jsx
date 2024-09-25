import React from "react";

import { Box, Stack, Typography } from "@mui/material";

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getCategoryById } from "../../store";

import theme from "../../theme";
import Footer from "../LandingPage/Footer";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ContrastIcon from "@mui/icons-material/Contrast";
import MenuIcon from "@mui/icons-material/Menu";

function Gallery() {
  const location = useLocation();
  const navigate = useNavigate();

  const imgs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const { category } = location.state || {};

  const handleBack = () => {
    navigate(-1);
  };

  const currentCategory = getCategoryById(category.id);
  console.log("currentCategory", currentCategory);

  if (!category) {
    return <div>No category selected</div>;
  }
  return (
    <Stack
      sx={{
        backgroundColor: theme.palette.fourth.main,
        width: "100vw",
        // height: "100vh",
        minHeight: "700px",
        color: theme.palette.primary.main,
        position: "relative",
      }}
      // alignItems={"center"}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{
          width: "100vw",
          padding: { lg: "20px 50px", md: "20px", sm: "20px", xs: "20px" },
          position: "fixed",
          backgroundColor: theme.palette.fourth.main,
          // border: "2px solid red",
        }}
      >
        <Stack
          direction={"row"}
          sx={{ border: "0px solid blue", cursor: "pointer" }}
          gap={"10px"}
          onClick={handleBack}
        >
          <ArrowBackIcon />
          <Typography>Home</Typography>
        </Stack>

        <Stack direction={"row"} sx={{ border: "0px solid blue" }} gap={"10px"}>
          <ContrastIcon style={{ cursor: "pointer" }} />
          <MenuIcon style={{ cursor: "pointer" }} />
        </Stack>
      </Stack>
      <Typography
        sx={{
          ...theme.typography.kalam,
          textAlign: "center",
          fontSize: "60px",
          marginTop: "50px",
        }}
      >
        {currentCategory.name}
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          width: "100%",
          maxWidth: "1000px",
          paddingTop: "50px",
          margin: "auto",
        }}
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={"10px"}
      >
        {imgs.map((image, index) => (
          <Box
            key={index}
            sx={{
              borderRadius: "50px",
              overflow: "hidden",
              width: "300px",
              height: "300px",
            }}
          >
            <img
              // src={image}
              src={`https://picsum.photos/id/2${currentCategory.id}${
                index + 1
              }/300/300`}
              alt={`Image ${index + 1}`}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        ))}
      </Stack>
      <Box>
        <Footer />
      </Box>
    </Stack>
  );
}

export default Gallery;
