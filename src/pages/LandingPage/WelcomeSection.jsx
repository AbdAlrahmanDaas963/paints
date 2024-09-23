import SectionContainer from "../../components/common/SectionContainer";
import { Box, Stack, Typography, Button } from "@mui/material";
import theme from "../../theme";
import starry from "../../assets/starry.png";

function WelcomeSection() {
  return (
    <SectionContainer>
      <Stack
        width={"100%"}
        height={"100vh"}
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
          src={starry}
        />
        <Box
          width={"100%"}
          height={"100%"}
          position={"absolute"}
          sx={{ bgcolor: "#1D3557", opacity: "0.6" }}
        />
        <Stack direction={"column"} position={"absolute"} sx={{}}>
          <Typography
            sx={{
              ...theme.typography.kalam,
              color: theme.palette.fourth.main,
              fontSize: { xs: "40px", md: "50px" },
              textAlign: "center",
            }}
          >
            ART is An emotion wrapped in design
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={"10px"}
          >
            <Typography
              sx={{
                color: theme.palette.fourth.main,
                textAlign: "left",

                fontSize: { xs: "10px", md: "15px" },
                maxWidth: { xs: "300px", md: "400px" },
              }}
            >
              Artworks produced using the giclée printing technology exhibit
              extremely high color accuracy
            </Typography>
            <Button
              sx={{
                color: theme.palette.primary.main,
                background: theme.palette.fourth.main,
                borderRadius: "50px",
                fontSize: "20px",
                fontWeight: "bold",
                padding: " 15px 25px",
                ...theme.typography.katibeh,
              }}
            >
              Contacnt Me
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </SectionContainer>
  );
}

export default WelcomeSection;
