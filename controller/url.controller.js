const Url = require("../modals/url.modals");
const shortid = require("shortid");
const moment = require("moment");
// controller for shorten URL
exports.urlShort = async (req, res) => {
	try {
		if (!req.body.originalUrl) {
			return res.status(400).send({ Error: "URL not found" });
		}
		const url_regex =
			/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
		const checkURL = url_regex.test(req.body.originalUrl);
		if (checkURL == false) {
			return res.status(400).send({ Error: "Please Enter a valid URL" });
		}
		// generate short if by using shortid module
		const shortId = shortid.generate();
		const shortUrlObject = {
			originalUrl: req.body.originalUrl,
			shortID: shortId,
			expiresIn: moment().add(15, "days").toDate(),
		};
		const url = await Url.create(shortUrlObject);
		res.status(200).send({
			shortId: url.shortID,
		});
	} catch (error) {
		console.log("Error:", error);
		res.status(500).send({
			message: "Some thing went wrong",
		});
	}
};

// controller for redirect to the original URL
exports.getUrl = async (req, res) => {
	try {
		const { shortID } = req.params;
		const url = await Url.findOne({ shortID: shortID });
		if (url) {
			//check if link is expired
			if (url.expiresIn && moment().isAfter(url.expiresIn)) {
				return res.status(410).send({ error: "URL has expired" });
			}
			// push currect date when link is clicked
			url.clicked.push({ clickedTime: moment().toDate() });
			await url.save();
			//Redirect to the origin link
			res.redirect(url.originalUrl);
		} else {
			res.status(404).json({ Error: "URL not found" });
		}
	} catch (error) {
		res.status(500).send({
			message: "Some thing went wrong",
		});
	}
};

// controller for getting the clicked url analytics
exports.getClickedAnalytics = async (req, res) => {
	try {
		// Destructure shortID from params
		const { shortID } = req.params;
		const url = await Url.findOne({ shortID: shortID });

		if (url) {
			res.status(200).send({ shortId: url.shortID, count: url.clicked.length });
		} else {
			res.status(404).json({ Error: "URL not found" });
		}
	} catch (error) {
		res.status(500).send({
			message: "Some thing went wrong",
		});
	}
};
