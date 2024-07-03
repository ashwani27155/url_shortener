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

// API for redirect to the original URL
exports.getUrl = async (req, res) => {
	try {
		const { shortID } = req.params;
		const url = await Url.findOne({ shortID: shortID });

		if (url) {
			url.clicked.push({ clickedTime: new Date() });
			await url.save();
			res.redirect(url.originalUrl);
		} else {
			res.status(404).json({ Error: "URL not found" });
		}
	} catch (error) {
		console.log("Error:", error);
	}
};