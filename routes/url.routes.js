const urlController = require("../controller/url.controller");
const middleware = require("../middleware/auth.middleware");
module.exports = (app) => {
	//Routes for shorten url
	app.post(
		"/api/v1/short_url",
		[middleware.verifyToken],
		urlController.urlShort
	);
	//Routes for redirect to the origin URL
	app.get(
		"/api/v1/url/:shortID",
		[middleware.verifyToken],
		urlController.getUrl
	);
	//Routes for Get the clicked link Analytics
	app.get(
		"/api/v1/url_analytics/:shortID",
		[middleware.verifyToken],
		urlController.getClickedAnalytics
	);
};
