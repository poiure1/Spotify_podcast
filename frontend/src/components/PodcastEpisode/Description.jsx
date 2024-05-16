import { Box, Typography, useTheme, Button, IconButton } from "@mui/material";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosPlayCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Description({ data }) {
  const navigate = useNavigate();
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
    <Box
      id="mid "
      sx={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "20px",
        gap: "20px",
        marginTop: "20px",
        pb: "20%",
      }}
    >
      <Box
        id="play"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          id="word"
          sx={{
            display: "flex",
            flexDirection: "row",
            paddingBottom: "10px",
            paddingTop: "5px",
          }}
        >
          <Typography
            sx={{
              color: "gray",
              fontSize: "15px",
            }}
          >
            {data.createdAt}
          </Typography>
          <Typography
            sx={{
              color: "gray",
              fontWeight: "bold",
              fontSize: "15px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            ·
          </Typography>
          <Typography
            sx={{
              color: "gray",
              fontSize: "15px",
            }}
          >
            {time}
          </Typography>
        </Box>

        <Box
          id="button"
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <IconButton id="play" sx={{ p: 0 }}>
            <IoIosPlayCircle
              color="#1DB954"
              style={{ width: "60px", height: "60px" }}
            />
          </IconButton>

          <IconButton
            id="plus"
            sx={{
              marginLeft: "11px",
            }}
          >
            <FiPlusCircle
              style={{ width: "30px", height: "30px" }}
              color="gray"
            />
          </IconButton>

          <IconButton id="menu">
            <IoEllipsisHorizontal
              style={{ width: "30px", height: "30px" }}
              color="gray"
            />
          </IconButton>
        </Box>
      </Box>

      <Box
        id="word"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Box id="title">
          <Typography
            sx={{
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              paddingTop: "5px",
            }}
          >
            Episode Description
          </Typography>
        </Box>

        <Box id="word" sx={{ width: "600px" }}>
          <Typography
            sx={{
              color: "gray",
              fontSize: "15px",
              opacity: "1",
              paddingTop: "5px",
            }}
          >
            {data.description}
          </Typography>
        </Box>
      </Box>

      <Box
        id="seeall"
        sx={{
          marginTop: "10px",
        }}
      >
        <Button
          onClick={() => navigate(`/podcastshow/${data.show.id}`)}
          sx={{
            border: "1.5px solid gray",
            borderRadius: "20px",
            padding: "5px 15px",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "13px",
              fontWeight: "bold",
              wordSpacing: "2px",
              textTransform: "none",
            }}
          >
            See all episodes
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
export default Description;
