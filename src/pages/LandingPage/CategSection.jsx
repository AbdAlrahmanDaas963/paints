import React, { useState } from "react";

import { Box, Stack, Typography } from "@mui/material";
import theme from "../../theme";

import eye from "../../assets/eye.png";
import Acrylic from "../../assets/back/AcrylicArt-back.jpg";
import digital from "../../assets/back/DigitalArt-back.jpg";
import oil from "../../assets/back/OilPainting-back.png";

import CategCard from "../../components/common/CategCard";
import { useNavigate } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: 1, name: "Digital Art", image: digital },
  { id: 2, name: "Oil Painting", image: oil },
  { id: 3, name: "Acrylic Art", image: Acrylic },
];

function CategSection() {
  const [backgroundImage, setBackgroundImage] = useState(null);

  const navigate = useNavigate();
  const handleCategoryClick = (category) => {
    navigate("/gallery", { state: { category } });
  };

  return (
    <Stack>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <AnimatePresence>
          {backgroundImage && (
            <motion.div
              key={backgroundImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 1,
              }}
            />
          )}
        </AnimatePresence>

        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          spacing={3}
          sx={{ position: "relative", zIndex: 2, height: "100%" }}
        >
          {categories.map((category, index) => (
            <motion.div
              onClick={() => handleCategoryClick(categories[index])}
              key={category.id}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              onHoverStart={() => setBackgroundImage(category.image)}
              onHoverEnd={() => setBackgroundImage(null)}
            >
              <Box
                sx={{
                  width: 200,
                  height: 200,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderRadius: "50%",
                  boxShadow: 3,
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    ...theme.typography.kalam,
                    color: theme.palette.primary.main,
                    fontSize: "25px",
                  }}
                >
                  {category.name}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Stack>

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 1,
          }}
        />
      </Box>
      {/* <Stack
        width={"100%"}
        height={{ xs: "1000px", md: "100vh" }}
        minHeight={"700px"}
        position={"relative"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ overflowX: "hidden" }}
      >
        <img
          style={{
            minWidth: "100vw",
            height: "100%",
            position: "absolute",
          }}
          src={eye}
        />
        <Box
          width={"100%"}
          height={"100%"}
          position={"absolute"}
          sx={{ bgcolor: "#1D3557", opacity: "0.6" }}
        />
        <Stack
          direction={{ xs: "column", md: "row" }} // Column on mobile, row on laptop
          spacing={8} // Adjusts the spacing between the cards
          sx={{
            alignItems: "center",
            justifyContent: "center",
            maxHeight: "700px",
          }}
        >
          <Box
            onClick={() => handleCategoryClick(categories[0])}
            sx={{ width: { xs: "100%", md: "33%" } }}
          >
            <CategCard title={"Digital Art"} src={digital} />
          </Box>
          <Box
            onClick={() => handleCategoryClick(categories[1])}
            sx={{ width: { xs: "100%", md: "33%" } }}
          >
            <CategCard title={"Oil Painting"} src={oil} />
          </Box>
          <Box
            onClick={() => handleCategoryClick(categories[2])}
            sx={{ width: { xs: "100%", md: "33%" } }}
          >
            <CategCard title={"Acrylic Art"} src={Acrylic} />
          </Box>
        </Stack>
      </Stack> */}
    </Stack>
  );
}

export default CategSection;
