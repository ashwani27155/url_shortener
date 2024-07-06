const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const serverConfig = require("./config/server.config");
const dbConfig = require("./config/db.config");
const swagger = require("./config/swagger.config");
const app = express();
app.use(bodyParser.json());
//use cors middleware
app.use(cors({ origin: "*" }));
swagger(app);
// Database connection
mongoose
	.connect(dbConfig.DB_URL)
	.then(() => {
		console.log(`Database connected successfully`);
	})
	.catch((error) => {
		console.log("Error while connecting to database:", error);
	});
require("./routes/url.routes")(app);
require("./routes/user.routes")(app);
// Listen to specific port
app.listen(serverConfig.PORT, () => {
	console.log(`Server is running on port: ${serverConfig.PORT}`);
});
