const express = require("express");
const cors = require("cors");

const connection = require("./services/database.js");
const podcastepisodeRouter = require("./routers/podcastEpisodes.js");
const podcastshowRouter = require("./routers/podcastShows.js");
const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());
app.get("/", (req,res) => {return res.send ("hello")})

app.use("/podcastshow", podcastshowRouter);
app.use("/podcastepisode", podcastepisodeRouter)

connection.connect((err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Database is connected");
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
