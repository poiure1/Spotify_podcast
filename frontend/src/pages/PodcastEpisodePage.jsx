import { Box } from "@mui/material";
import TopEpisode from "../components/PodcastEpisode/TopEpisode";
import Description from "../components/PodcastEpisode/Description";
import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import { useParams } from "react-router-dom";

function PodcastEpisodePage() {
  let { podcastEpisodeId } = useParams();
  const [podcastEpisodeData, setpodcastEpisodeData] = useState();
  function getRandomNumber() {
    return Math.floor(Math.random() * 489) + 1;
  }
  async function getEpisodesData() {
    let data = null;
    while (data === null) {
      try {
        let url = null;
        if (podcastEpisodeId) {
          url = `http://localhost:3001/podcastepisode?podcastEpisodeId=${podcastEpisodeId}`;
        } else {
          url = `http://localhost:3001/podcastepisode?podcastEpisodeId=${getRandomNumber()}`;
        }
        const response = await axios.get(url);
        data = response.data.episodes;
        if (data) {
          setpodcastEpisodeData(response.data.episodes);
        }
      } catch (error) {
        console.log("Error");
      }
    }
  }

  useEffect(() => {
    getEpisodesData();
  }, []);

  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(71,105,71,1) 0%, rgba(28,49,28,1) 35%, rgba(8,14,8,1) 100%)",
      }}
    >
      {podcastEpisodeData && <TopEpisode data={podcastEpisodeData} />}
      {podcastEpisodeData && <Description data={podcastEpisodeData} />}
    </Box>
  );
}

export default PodcastEpisodePage;
