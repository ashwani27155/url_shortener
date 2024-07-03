const express = require("express");
const mongoose = require("mongoose");
const serverConfig = require("./config/server.config");
const dbConfig = require("./config/db.config");
const app = express();
mongoose
	.connect(dbConfig.DB_URL)
	.then(() => {
		console.log(`Database URL: ${dbConfig.DB_URL}`);
	})
	.catch((error) => {
		console.log("Error while connecting to database:", error);
	});

app.listen(serverConfig.PORT, () => {
	console.log(`Server is running on port: ${serverConfig.PORT}`);
});
