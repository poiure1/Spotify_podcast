const express = require("express");

const getEpisode = require("../controllers/podcastEpisodes/getEpisode.js");
const getAllEpisodes = require("../controllers/podcastEpisodes/getAllEpisodes.js");
const podcastepisodeRouter = express.Router();

podcastepisodeRouter.get("/all", getAllEpisodes);
podcastepisodeRouter.get("/", getEpisode);

module.exports = podcastepisodeRouter;