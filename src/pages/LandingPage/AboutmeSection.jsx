import { Stack, Typography } from "@mui/material";
import theme from "../../theme";

import SectionContainer from "../../components/common/SectionContainer";

function AboutmeSection() {
  return (
    <SectionContainer>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        gap={"50px"}
        alignItems={{ xs: "center", md: "self-start" }}
      >
        <Typography
          sx={{
            ...theme.typography.kalam,
            fontSize: "50px",
            color: theme.palette.fith.main,
          }}
        >
          About me
        </Typography>
        <Typography
          sx={{
            ...theme.typography.inter,
            maxWidth: "300px",
            color: theme.palette.primary.main,
          }}
        >
          The twentieth century was a period of significant change and tumult,
          including unprecedented freedom of expression in art. A plethora of
          vibrant movements and groups emerged and flourished, from the
          influential Bloomsbury Group to the St Ives School. It represents one
          of the most exciting periods in British art.
        </Typography>
      </Stack>
    </SectionContainer>
  );
}

export default AboutmeSection;
