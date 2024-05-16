import React from "react";
import { Box, Typography } from "@mui/material";
import { AiFillCaretRight, AiOutlinePlusCircle } from "react-icons/ai";

function EpisodeCard({data}) {
  function timeFormat(duration) {
    const hrs = ~~(duration / 3600);
    const mins = ~~((duration % 3600) / 60);
    const secs = ~~duration % 60;

    let ret = "";
    if (hrs > 0) {
      ret += "" + hrs + " hr ";
      ret += "" + mins + " min ";
    } else {
      ret += "" + mins + " min ";
      ret += "" + secs + " sec ";
    }
    return ret;
  }
  const time = timeFormat(data.length / 1000); //length ms

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <Box sx={{ paddingButtom: "10%" }}>
        <hr
          style={{
            marginTop: "20px",
            marginBottom: "5px",
          }}
        />
      </Box>

      <Box sx={{ display: "flex", padding: "10px", marginBottom: "10px" }}>
        <Box
          sx={{
            display: "flex",
            marginRight: "10px",
            width: "100px",
            height: "100px",
          }}
        >
          <img src={data.imageUrl} alt={data.title} />
        </Box>
        <Box
          sx={{
            paddingLeft: "10px",
            flexDirection: "column",
            color: "white",
          }}
        >
          <Typography
            className="Podcast_Name"
            sx={{ fontWeight: "500", fontSize: "15px", paddingBottom: "3px" }}
          >
            {data.title}
          </Typography>
          <Typography
            className="Podcast_Author"
            sx={{
              fontWeight: "100",
              fontSize: "13px",
              opacity: "60%",
              paddingBottom: "8px",
            }}
          >
            {data.title} {/*ที่ดึงไม่ได้*/}
          </Typography>
          <Typography
            className="Podcast_Des"
            sx={{ fontWeight: "100", fontSize: "13px", opacity: "60%" }}
          >
            {data.description}
          </Typography>
          <Box
            className="dateNdurLine"
            sx={{ display: "flex", paddingTop: "10px", paddingButtom: "5px" }}
          >
            <Typography
              className="Podcast_Date"
              sx={{ fontWeight: "500", fontSize: "14px" }}
            >
              {data.createdAt}
            </Typography>
            <Typography
              className="dot"
              sx={{ fontWeight: "bold", fontSize: "15px", paddingLeft: "10px" }}
            >
              ·
            </Typography>
            <Typography
              className="Podcast_time"
              sx={{ fontWeight: "500", fontSize: "14px", paddingLeft: "10px" }}
            >
              {time}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              paddingTop: "10px",
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative", 
            }}
          >
            <AiOutlinePlusCircle size={25} />
            <Box
              sx={{
                top: "50%",
                left: "50%",
                backgroundColor: "white",
                borderRadius: "50%",
                width: 25,
                height: 25,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AiFillCaretRight style={{ color: "black" }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default EpisodeCard;
