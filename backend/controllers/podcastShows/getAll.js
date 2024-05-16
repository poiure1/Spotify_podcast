const connection = require("../../services/database");

const getAll = async (req, res) => {
	// Query the data from the database
	try {
		const userDataQuery = await connection
			.promise()
			.query(`SELECT * FROM c16_podcast_shows`);
		const userData = userDataQuery[0];

		if (!userData) {
			return res.status(404).json({
				success: false,
				data: null,
				error: "There is no user data in the database",
			});
		}
		return res.json({
			success: true,
			data: userData,
			error: null,
		});
	} catch (error) {
		console.error("Error:", error);
		return res.status(500).json({
			success: false,
			data: null,
			error: "Internal server error",
		});
	}
};
module.exports = getAll;