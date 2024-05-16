import React from "react";
import { Box, Typography } from "@mui/material";
import { AiOutlineEllipsis } from "react-icons/ai";

function FollowButton() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: 'flex-start'
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          aligniTem: 'center'
        }}
      >
        {/* Follow Button */}
        <Box
          sx={{
            borderRadius: "20px",
            color: "white",
            border: "1px solid grey",
            padding: "3px 13px 3px 13px",
          }}
        >
          <Typography sx={{ fontSize: "13px" }}>Follow</Typography>
        </Box>
        <AiOutlineEllipsis size={25} style={{ color: "white" }} />
      </Box>
      <Typography sx={{fontWeight: 'bold', fontSize:'20px', paddingTop:'15px'}}>
        All Episodes
      </Typography>
    </Box>
  );
}

export default FollowButton;
