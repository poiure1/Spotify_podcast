import React from "react";
import { Box, Typography } from "@mui/material";

function AboutSession({ about }) {
  return (
    <Box sx={{ width: "70%", display: "flex", flexDirection: "column" }}>
      <Typography
        className="Podcast_Genre"
        sx={{
          fontWeight: "600",
          fontSize: "18px",
          paddingBottom: "8px",
          color: "white",
        }}
      >
        About
      </Typography>
      <Typography
        className="Podcast_Des"
        sx={{
          fontWeight: "100",
          fontSize: "13px",
          color: "white",
        }}
      >
        {about}
      </Typography>
    </Box>
  );
}

export default AboutSession;
