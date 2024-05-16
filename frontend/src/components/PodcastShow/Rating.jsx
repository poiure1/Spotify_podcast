import React from "react";
import { Box, Typography } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Rating({ rate }) {
  return (
    <Box sx={{display: 'flex'}}>
    <Box
      sx={{
        borderRadius: "20px",
        color: "white",
        padding:  "2px",
        backgroundColor: '#302c2c', 
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
      }}
    >
      <Typography sx={{ fontSize: "13px", fontWeight: '500', paddingLeft: '8px', }}>
        {rate}
      </Typography>
      <StarBorderIcon sx={{ fontSize: "15px", paddingRight: '5px'}} />
            </Box>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "15px", paddingLeft: "10px", paddingRight: '10px' }}
            >
              ·
            </Typography>
            <Box>
            <Box sx={{display: 'flex'}}>
    <Box
      sx={{
        borderRadius: "20px",
        color: "white",
        padding:  "2px",
        backgroundColor: '#302c2c', 
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
        
      }}
    >
      <Typography sx={{ fontSize: "13px", fontWeight: '500', paddingLeft: '8px', paddingRight: '8px' }}>
      genre1     
      </Typography>
            </Box>
    </Box> 
    </Box>
    </Box>

  );
}

export default Rating;
