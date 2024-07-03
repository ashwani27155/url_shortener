const userController = require("../controller/user.controller");
module.exports = (app) => {
	//Routes for register user
	app.post("/api/v1/auth/signup", userController.signup);
	//Routes for login user
	app.post("/api/v1/auth/signin", userController.signin);
};
