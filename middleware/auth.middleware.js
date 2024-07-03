const jwt = require("jsonwebtoken");
exports.verifyToken = (req, res, next) => {
	// Read the access token from the header
	const token = req.headers["token"];
	//if token is null
	if (!token) {
		return res.status(403).send({
			message: "No token provided",
		});
	}
	//if the token was provided, we need to verify it
	jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
		if (err) {
			return res.status(401).send({
				message: "Unauthorised",
			});
		}
		//if token is valid then try to read the user id from the decoded token and store it request object
		req._id = decoded._id;
		next();
	});
};
