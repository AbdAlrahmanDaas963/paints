import { Box, Stack } from "@mui/material";

import eye from "../../assets/eye.png";
import Acrylic from "../../assets/Acrylic.jpg";
import digital from "../../assets/digital.jpeg";
import oil from "../../assets/oil.jpg";

import SectionContainer from "../../components/common/SectionContainer";
import CategCard from "../../components/common/CategCard";

function CategSection() {
  return (
    <SectionContainer>
      <Stack
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
          <Box sx={{ width: { xs: "100%", md: "33%" } }}>
            <CategCard title={"Digital Art"} src={digital} />
          </Box>
          <Box sx={{ width: { xs: "100%", md: "33%" } }}>
            <CategCard title={"Oil Painting"} src={oil} />
          </Box>
          <Box sx={{ width: { xs: "100%", md: "33%" } }}>
            <CategCard title={"Acrylic Art"} src={Acrylic} />
          </Box>
        </Stack>
      </Stack>
    </SectionContainer>
  );
}

export default CategSection;
