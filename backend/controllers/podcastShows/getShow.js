const connection = require("../../services/database");

const getShow = async (req, res) => {
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
            .query(`SELECT id,title,author,about,rating,image_url AS imageUrl FROM c16_podcast_shows WHERE id = ${podcastShowId}`);
        const showData = showQuery[0][0];
        const episodeQuery = await connection
            .promise()
            .query(`SELECT id AS episodeId,title,description,image_url AS imageUrl, DATE_FORMAT(created_at, '%M %Y') AS createdAt,length FROM c17_podcast_episodes WHERE show_id = ${podcastShowId}`);
        const episodeData = episodeQuery[0];
        if(!showData){
            return res.status(404).json({
                success: false,
                podcastShow: null,
                error: "Podcast show not found",
            });
        }

        const podcastShowData = {
            id: showData.id,
            title: showData.title,
            author: showData.author,
            about: showData.about,
            rating: showData.rating,
            imageUrl: showData.imageUrl,
            episodes: episodeData
        }

        return res.json({
            success: true,
            podcastShow: podcastShowData,
            error: null,

        })
    }
    catch(error){
        console.error("Error:", error);
        return res.status(500).json({
            success: false,
            podcastShow: null,
            error: "Internal server error",
        });
    }
};
module.exports = getShow;