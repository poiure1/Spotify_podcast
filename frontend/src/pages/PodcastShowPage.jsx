import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import axios from "axios";
import About from "../components/PodcastShow/AboutSession";
import Rating from "../components/PodcastShow/Rating";
import Follow from "../components/PodcastShow/FollowButton";
import EpisodeCard from "../components/PodcastShow/EpisodeCard";
import Trailer from "../components/PodcastShow/TrailerCard";
import TopShow from "../components/PodcastShow/TopShow";

function PodcastShowPage() {
  const { podcastShowId } = useParams();
  const navigate = useNavigate();
  const [podcastShowData, setPodcastShowData] = useState();

  function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  const getShow = async () => {
    let url = null;
    if (podcastShowId) {
      url = `http://localhost:3001/podcastshow?podcastShowId=${podcastShowId}`;
    } else {
      url = `http://localhost:3001/podcastshow?podcastShowId=${getRandomNumber()}`;
    }
    const data = await axios.get(url);
    setPodcastShowData(data.data.podcastShow);
  };

  useEffect(() => {
    getShow();
    
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          marginBottom: "30px",
        }}
      >
        {podcastShowData && <TopShow data={podcastShowData} />}
      </Box>
      <Box
        sx={{
          pl: "20px",
        }}
      >
        <Follow/>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "60%" }}>
            {podcastShowData &&
              podcastShowData.episodes.map((episode) => (
                <Box
                  key={episode.episodeId}
                  onClick={() =>
                    navigate(`/podcastepisode/${episode.episodeId}`)
                  }
                  sx={{ cursor: "pointer" }}
                >
                  {podcastShowData && (
                    <EpisodeCard
                      data={episode}
                      author={podcastShowData.author}
                    />
                  )}
                </Box>
              ))}
          </Box>
          <Box sx={{ width: "5%" }}></Box>

          <Box sx={{ width: "35%", display: "flex", flexDirection: "column" }}>
            {podcastShowData && <About about={podcastShowData.about} />}
            {podcastShowData && <Trailer data={podcastShowData} />}
            <Box>
            {podcastShowData && <Rating rate={podcastShowData.rating} />}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PodcastShowPage;
