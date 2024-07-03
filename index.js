const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const serverConfig = require("./config/server.config");
const dbConfig = require("./config/db.config");
const app = express();
app.use(bodyParser.json());
mongoose
	.connect(dbConfig.DB_URL)
	.then(() => {
		console.log(`Database URL: ${dbConfig.DB_URL}`);
	})
	.catch((error) => {
		console.log("Error while connecting to database:", error);
	});
require("./routes/url.routes")(app);
app.listen(serverConfig.PORT, () => {
	console.log(`Server is running on port: ${serverConfig.PORT}`);
});
