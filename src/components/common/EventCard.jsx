import React from "react";
import { Stack, Typography } from "@mui/material";

import theme from "../../theme";

function EventCard({ title, date, img }) {
  return (
    <Stack
      sx={{
        width: "300px",
        height: "400px",
      }}
    >
      <img
        src={img}
        width={"100%"}
        style={{ widht: "300px", height: "350px" }}
      />
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography sx={{ ...theme.typography.katibeh, fontSize: "27px" }}>
          {title}
        </Typography>
        <Typography sx={{ ...theme.typography.katibeh, fontSize: "27px" }}>
          {date}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default EventCard;
