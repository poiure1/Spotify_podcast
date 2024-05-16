const connection = require("../../services/database");

const getEpisodes = async (req, res) => {
	const podcastEpisodeId = req.query.podcastEpisodeId;
    const checkPodcastEpisodeId = new RegExp(/^\d+$/).test(podcastEpisodeId);
    if(!podcastEpisodeId || !checkPodcastEpisodeId){
        return res.json({
            success: false,
            data: null,
            error: "id is invalid",
        });
    }

    try{
        const episodeQuery = await connection
            .promise()
            .query(`SELECT id,title,description,image_url AS imageUrl, DATE_FORMAT(created_at, '%M %Y') AS createdAt,length FROM c17_podcast_episodes WHERE id = ${podcastEpisodeId}`);
        const episodeData = episodeQuery[0][0];
        const showQuery = await connection
            .promise()
            .query(`SELECT id,title FROM c16_podcast_shows WHERE id = (SELECT show_id FROM c17_podcast_episodes WHERE id = ${podcastEpisodeId})`);
        const showData = showQuery[0][0];

        if(!episodeData){
            return res.status(404).json({
                success: false,
                episodes: null,
                error: "Podcast episodes not found",
            });
        }

        const podcastEpisodeData = {
            id: episodeData.id,
            title: episodeData.title,
            description: episodeData.description,
            createdAt: episodeData.createdAt,
            imageUrl: episodeData.imageUrl,
            length: episodeData.length,
            show: showData
        }
        return res.json({
            success: true,
            episodes: podcastEpisodeData,
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
module.exports = getEpisodes;