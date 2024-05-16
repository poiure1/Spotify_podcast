const connection = require("../../services/database");

const getAllEpisodes = async (req, res) => {
	const podcastShowId = req.query.podcastShowId;
    const checkPodcastShowId = new RegExp(/^\d+$/).test(podcastShowId);
    if(!podcastShowId || !checkPodcastShowId){
        return res.json({
            success: false,
            data: null,
            error: "id is invalid",
        });
    }

    try{
        const showQuery = await connection
            .promise()
            .query(`SELECT id,title,description,created_at,length FROM c17_podcast_episodes WHERE show_id = ${podcastShowId}`);
        const showData = showQuery[0][0];

        if(!showData){
            return res.status(404).json({
                success: false,
                episodes: null,
                error: "Podcast show not found",
            });
        }

        return res.json({
            success: true,
            episodes: showData,
            error: null,
        })
    }
    catch(error){
        console.error("Error:", error);
        return res.status(500).json({
            success: false,
            episodes: null,
            error: "Internal server error",
        });
    }
};
module.exports = getAllEpisodes;