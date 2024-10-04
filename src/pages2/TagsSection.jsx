import { Box, Stack, Typography, Button } from "@mui/material";
import theme from "../theme";

// ? {lg: "", md: "", sm: "", xs: ""}

const Tag = ({ title }) => {
  return (
    <Stack
      sx={{
        backgroundColor: theme.palette.black.main,
        color: theme.palette.white.main,
        borderRadius: "7px",
        padding: "7px 10px",
        fontWeight: "bold",
      }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      #{title}
    </Stack>
  );
};

const tagsToRender = [
  { title: "buildings" },
  { title: "oil_painting" },
  { title: "kids" },
  { title: "colorful" },
  { title: "nature" },
  { title: "animals" },
  { title: "classic" },
  { title: "cars" },
  { title: "tech" },
  { title: "b&w" },
  { title: "sky" },
  { title: "abstract" },
  { title: "anime" },
];

function TagsSection() {
  return (
    <Stack
      width={"100%"}
      minWidth={"350px"}
      height={"fit-content"}
      minHeight={"400px"}
      sx={{
        padding: {
          lg: "0 150px",
          md: "0 100px",
          sm: "50px 30px",
          xs: "50px 15px",
        },
        border: "0px dotted grey",
        // backgroundColor: "grey",
        backgroundColor: theme.palette.white.main,
        overflow: "hidden",
      }}
      direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={"50px"}
    >
      <Typography
        fontSize={{ lg: "65px", md: "60px", sm: "60px", xs: "37px" }}
        sx={{ ...theme.typography.kalam, fontWeight: "bold" }}
      >
        <span style={{ color: theme.palette.orange.main }}>Find</span> what you
        are looking for.
      </Typography>
      <Box
        sx={{
          width: { lg: "1px", md: "1px", sm: "100%", xs: "100%" },
          height: { lg: "150px", md: "100px", sm: "1px", xs: "1px" },
          backgroundColor: theme.palette.black.main,
        }}
      />
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={"10px"}
        alignItems={"center"}
      >
        {tagsToRender.map((tag, index) => (
          <Tag key={index} title={tag.title} />
        ))}
      </Stack>
    </Stack>
  );
}

export default TagsSection;
