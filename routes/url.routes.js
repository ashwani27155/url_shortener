const urlController = require("../controller/url.controller");
module.exports = (app) => {
	//Routes for shorten url
	app.post("/api/v1/short_url", urlController.urlShort);
};
