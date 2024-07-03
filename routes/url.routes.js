const urlController = require("../controller/url.controller");
module.exports = (app) => {
	//Routes for shorten url
	app.post("/api/v1/short_url", urlController.urlShort);
	// Routes for redirect to the origin URL
	app.get("/api/v1/url/:shortID", urlController.getUrl);
};
