import { Box, Typography, IconButton } from "@mui/material";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function TopEpisode({ data }) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        width: "100%",
        paddingBottom: "25px",
        background:
          "linear-gradient(180deg, rgba(110,138,111,1) 0%, rgba(70,97,71,1) 35%, rgba(41,62,41,1) 100%)",
      }}
    >
      <Box
        id="buttontop"
        sx={{
          display: "flex",
          marginTop: "5px",
          marginLeft: "10px",
        }}
      >
        <IconButton id="arrowBack" 
        onClick={() => navigate(`/podcastshow/${data.show.id}`)}>
          <Box
            sx={{
              backgroundColor: "black",
              opacity: "60%",
              borderRadius: "50%",
            }}
          >
            <Box
              sx={{
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IoIosArrowBack color="white" size={30} />
            </Box>
          </Box>
        </IconButton>

        <IconButton id="arrowForward">
          <Box
            sx={{
              backgroundColor: "black",
              opacity: "60%",
              borderRadius: "50%",
            }}
          >
            <Box
              sx={{
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IoIosArrowForward color="white" size={30} />
            </Box>
          </Box>
        </IconButton>
      </Box>

      <Box
        id="comp"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box
          id="picture"
          sx={{
            display: "flex",
            width: "250px",
            height: "250px",
            marginLeft: "20px",
            paddingTop: "20px",
          }}
        >
          <img
            src={data.imageUrl}
            alt={data.title}
            width="250px"
            height="250px"
            style={{
              borderRadius: "5px",
            }}
          />
        </Box>

        <Box
          id="text"
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "30px",
            alignItems: "space-between",
            gap: "20px",
            paddingTop: "100px",
          }}
        >
          <Typography sx={{ fontWeight: "bold", color: "white" }}>
            Podcast Episode
          </Typography>
          <Typography
            sx={{ fontSize: "50px", fontWeight: "bold", color: "white" }}
          >
            {data.title}
          </Typography>
          <Typography sx={{ fontWeight: "bold", color: "white" }}>
            {data.show.title}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default TopEpisode;
