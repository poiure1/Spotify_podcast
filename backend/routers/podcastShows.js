const express = require("express");

const getAll = require("../controllers/podcastShows/getAll.js");
const getShow = require("../controllers/podcastShows/getShow.js");
const podcastshowRouter = express.Router();

podcastshowRouter.get("/all", getAll);
podcastshowRouter.get("/", getShow);


module.exports = podcastshowRouter;