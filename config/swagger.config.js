// config/swagger.js
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
	swaggerDefinition: {
		openapi: "3.0.0",
		info: {
			title: "URL Shortener API",
			version: "1.0.0",
			description: "API for URL shortening service",
		},
		servers: [
			{
				url: "https://url-shortner-kii5.onrender.com",
			},
		],
		components: {
			securitySchemes: {
				token: {
					type: "apiKey",
					in: "header",
					name: "token",
				},
			},
		},
		security: [
			{
				token: [],
			},
		],
	},
	apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
	app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
