import { Box, Stack, Typography } from "@mui/material";
import theme from "../../theme";

import paint1 from "../../assets/paints/paint1.png";
import paint2 from "../../assets/paints/paint2.png";
import paint3 from "../../assets/paints/paint3.png";
import paint4 from "../../assets/paints/paint4.png";
import paint5 from "../../assets/paints/paint5.png";
import paint6 from "../../assets/paints/paint6.png";
import paint7 from "../../assets/paints/paint7.png";
import paint8 from "../../assets/paints/paint8.png";
import paint9 from "../../assets/paints/paint9.png";
import paint10 from "../../assets/paints/paint10.png";

function PaintsSections() {
  const images = [
    paint1,
    paint2,
    paint3,
    paint4,
    paint5,
    paint6,
    paint7,
    paint8,
    paint9,
    paint10,
  ];

  return (
    <Stack
      sx={{
        backgroundColor: theme.palette.primary.main,
        height: { sm: "200vh", md: "150vh", xs: "300vh" },
        minHeight: { sm: "1500px", md: "1500px", xs: "2000px" },
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",

          backgroundColor: theme.palette.primary.main,
          color: theme.palette.fourth.main,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "50%",
            position: "absolute",

            padding: { sm: "100px", xs: 0, md: "150px" },
            zIndex: "3",
          }}
        >
          <Stack
            direction={"column"}
            alignItems={{ sm: "flex-start", xs: "center", md: "flex-start" }}
          >
            <Typography sx={{ ...theme.typography.katibeh, fontSize: "55px" }}>
              430+ paint
            </Typography>
            <Typography sx={{ ...theme.typography.katibeh, fontSize: "55px" }}>
              73+ client
            </Typography>
            <Typography sx={{ ...theme.typography.katibeh, fontSize: "55px" }}>
              8 trophies
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            width: "50%",
            height: "fit-content",
            position: "absolute",
            top: "230px",
            right: "0",
          }}
        >
          <Box>
            <Box
              sx={{
                position: "relative",
                width: "fit-content",
                height: "fit-content",
                transform: "rotate(45deg)",
                display: "grid",
                gridTemplateColumns: "repeat(3, 220px)",
                gridTemplateRows: "repeat(4, 220px)",
                gap: 2,
              }}
            >
              <Box sx={{ width: "220px", height: "220px" }} />
              {images.map((image, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "220px",
                    height: "220px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={image}
                    alt={`Paint ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              ))}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(135deg, rgba(29,53,87,0) 0%, rgba(29,53,87,1) 100%)",
                  pointerEvents: "none",
                }}
              />
            </Box>
          </Box>
        </Box>
        <Stack
          sx={{
            width: "100%",
            height: "50%",
            position: "absolute",
            top: "1000px",
            border: "1px solid red",
          }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography
            sx={{ zIndex: "1", ...theme.typography.katibeh, fontSize: "50px" }}
          >
            Events
          </Typography>
          <Stack
            sx={{ zIndex: "1" }}
            direction={{ xs: "column", md: "column", sm: "column", lg: "row" }}
            gap={"100px"}
          >
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
      </Box>
    </Stack>
  );
}

export default PaintsSections;
