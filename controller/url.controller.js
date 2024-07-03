const Url = require("../modals/url.modals");
const shortid = require("shortid");
// API for shorten URL
exports.urlShort = async (req, res) => {
	try {
		if (!req.body.originalUrl) {
			return res.status(400).send({ Error: "url not found" });
		}
		const shortId = shortid.generate();
		const shortUrlObject = {
			originalUrl: req.body.originalUrl,
			shortID: shortId,
		};
		const url = await Url.create(shortUrlObject);
		res.status(200).send({
			shortId: url.shortID,
		});
	} catch (error) {
		console.log("Error:", error);
	}
};