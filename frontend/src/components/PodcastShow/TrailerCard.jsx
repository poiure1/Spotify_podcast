import React from "react";
import { Box, Typography } from "@mui/material";
import { AiOutlineEllipsis } from "react-icons/ai";

function NowPlayingCard({ data }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "24em",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#302c2c",
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "20px",
        marginTop: "25px",
      }}
    >
      <Box
        sx={{
          width: "50px",
          height: "50px",
          marginRight: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={data.imageUrl}
          alt="Cover 1"
          style={{ width: "100%", borderRadius: "5px" }}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "14px",
            color: "white",
            marginBottom: "5px",
          }}
        >
          {data.title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "10px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              padding: "2px 4px",
              borderRadius: "3px",
              color: "white",
              marginRight: "5px",
            }}
          >
            TRAILER
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "white" }}>
            1 min 17 sec
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginLeft: "10px" }}>
        <AiOutlineEllipsis
          size={25}
          style={{ color: "white", marginRight: "10px" }}
        />
      </Box>
    </Box>
  );
}

export default NowPlayingCard;
