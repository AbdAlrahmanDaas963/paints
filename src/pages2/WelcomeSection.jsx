import { Box, Stack, Typography, Button } from "@mui/material";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import theme from "../theme";

import person from "../assets/person.png";

// ? {lg: "", md: "", sm: "", xs: ""}
function WelcomeSection() {
  return (
    <Stack
      direction={{ lg: "row", md: "column", sm: "column", xs: "column" }}
      alignItems={"center"}
      justifyContent={{
        lg: "space-between",
        md: "center",
        sm: "center",
        xs: "center",
      }}
      width={"100%"}
      minWidth={"350px"}
      height={{ lg: "90vh", md: "90vh", sm: "90vh", xs: "fit-content" }}
      minHeight={"700px"}
      gap={{ lg: "0", md: "50px", sm: "50px", xs: "20px" }}
      sx={{
        padding: {
          lg: "0 150px",
          md: "0 100px",
          sm: "0 30px",
          xs: "70px 15px 0 15px",
        },
        border: "0px dotted grey",
        backgroundColor: theme.palette.white.main,
        overflow: "hidden",
      }}
    >
      <Stack
        justifyContent={{
          lg: "space-between",
          md: "space-between",
          sm: "center",
          xs: "center",
        }}
        alignItems={{
          lg: "flex-start",
          md: "flex-start",
          sm: "center",
          xs: "center",
        }}
        sx={{
          height: "400px",
        }}
        gap={{ lg: "0", md: "50px", sm: "50px", xs: "20px" }}
      >
        <Typography
          sx={{
            ...theme.typography.kalam,
            fontWeight: "bold",
            color: theme.palette.black.main,
            fontSize: { lg: "65px", md: "60px", sm: "60px", xs: "37px" },
          }}
        >
          ART is An emotion
          <br />
          wrapped in design
        </Typography>
        <Stack
          direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
          justifyContent={"space-between"}
          gap={{ lg: "0", md: "0", sm: "20px", xs: "20px" }}
        >
          <Stack
            justifyContent={"space-between"}
            gap={{ lg: "0", md: "0", sm: "20px", xs: "20px" }}
          >
            <Typography
              sx={{
                ...theme.typography.inter,
                maxWidth: "350px",
                // fontSize: "18px",
              }}
              fontSize={{ lg: "18px", md: "17px", sm: "16px", xs: "13px" }}
              textAlign={{
                lg: "left",
                md: "left",
                sm: "center",
                xs: "center",
              }}
            >
              Artworks produced using the giclée printing technology exhibit
              extremely high color accuracy
            </Typography>
            <Stack
              direction={"row"}
              gap={"20px"}
              justifyContent={{
                lg: "flex-start",
                md: "flex-start",
                sm: "center",
                xs: "center",
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  padding: "10px 30px",
                  fontSize: "17px",
                  borderRadius: "50px",
                  backgroundColor: theme.palette.black.main,
                  color: theme.palette.white.main,
                  ...theme.typography.intro,
                }}
              >
                Button
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  padding: "10px 30px",
                  fontSize: "17px",
                  borderRadius: "50px",
                  borderColor: theme.palette.black.main,
                  backgroundColor: theme.palette.white.main,
                  color: theme.palette.black.main,
                  ...theme.typography.intro,
                }}
              >
                Button
              </Button>
            </Stack>
          </Stack>
          <Stack
            direction={{ lg: "column", md: "column", sm: "row", xs: "row" }}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"10px"}
          >
            <InstagramIcon fontSize="large" />
            <TelegramIcon fontSize="large" />
            <WhatsAppIcon fontSize="large" />
            <FacebookOutlinedIcon fontSize="large" />
          </Stack>
        </Stack>
      </Stack>
      <Box
        sx={{
          width: { lg: "400px", md: "400px", sm: "350px", xs: "300px" },
          height: { lg: "400px", md: "400px", sm: "350px", xs: "300px" },
          border: `2px solid ${theme.palette.black.main}`,
          borderRadius: "50px",
          position: "relative",
          backgroundColor: theme.palette.orange.main,
        }}
      >
        <Box sx={{ position: "absolute", width: "100%", bottom: "-8px" }}>
          <img src={person} width={"100%"} />
        </Box>
      </Box>
    </Stack>
  );
}

export default WelcomeSection;
