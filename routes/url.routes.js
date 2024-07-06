const urlController = require("../controller/url.controller");
const middleware = require("../middleware/auth.middleware");

module.exports = (app) => {
	// Routes for shortening URL
	app.post(
		"/api/v1/short_url",
		[middleware.verifyToken],
		urlController.urlShort
	);

	// Routes for redirecting to the original URL
	app.get("/:shortID", urlController.getUrl);

	// Routes for getting clicked link analytics
	app.get(
		"/api/v1/url_analytics/:shortID",
		[middleware.verifyToken],
		urlController.getClickedAnalytics
	);
	// Swagger API documentation for url_analytics, redirect to original url, shorten the url 
	/**
	 * @swagger
	 * /api/v1/short_url:
	 *   post:
	 *     summary: Shorten a URL
	 *     description: Generate a short URL for the provided original URL.
	 *     security:
	 *       - token: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               originalUrl:
	 *                 type: string
	 *                 example: https://www.google.com
	 *     responses:
	 *       '200':
	 *         description: Successfully shortened the URL
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 shortId:
	 *                   type: string
	 *                   example: _hferty
	 *       '400':
	 *         description: Bad request
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 error:
	 *                   type: string
	 *                   example: URL not found
	 *       '500':
	 *         description: Internal server error
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 message:
	 *                   type: string
	 *                   example: Something went wrong
	 */

	/**
	 * @swagger
	 * /api/v1/url_analytics/{shortID}:
	 *   get:
	 *     summary: Get URL Analytics
	 *     description: Get the analytics for the shortened URL.
	 *     parameters:
	 *       - in: path
	 *         name: shortID
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: The short ID of the URL
	 *     responses:
	 *       200:
	 *         description: Successfully retrieved analytics
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 clicks:
	 *                   type: integer
	 *                   example: 12
	 *       400:
	 *         description: Bad request
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 Error:
	 *                   type: string
	 *                   example: Invalid short ID
	 *       500:
	 *         description: Internal server error
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 message:
	 *                   type: string
	 *                   example: Something went wrong
	 */

	/**
	 * @swagger
	 * /{shortID}:
	 *   get:
	 *     summary: Redirect to the original URL associated with the short ID.
	 *     parameters:
	 *       - in: path
	 *         name: shortID
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: The short ID generated for the URL.
	 *     responses:
	 *       '302':
	 *         description: Redirects to the original URL.
	 *       '410':
	 *         description: URL has expired.
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 error:
	 *                   type: string
	 *                   example: URL has expired
	 *       '404':
	 *         description: URL not found.
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 Error:
	 *                   type: string
	 *                   example: URL not found
	 *       '500':
	 *         description: Internal server error.
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 message:
	 *                   type: string
	 *                   example: Something went wrong
	 */
};
