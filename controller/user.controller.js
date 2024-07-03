const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../modals/user.model");
//controller for user signup
exports.signup = async (req, res) => {
	try {
		// User object which is stored in database
		const userObjToBeStoredInDB = {
			name: req.body.name,
			email: req.body.email,
			// create hash of the password then store it in database
			password: bcrypt.hashSync(req.body.password, 8),
		};
		const userCreated = await User.create(userObjToBeStoredInDB);

		res.status(201).send({ message: "User registered successfully" });
	} catch (err) {
		res.status(500).send({
			message: "Some thing went wrong",
		});
	}
};
// controller for login user
exports.signin = async (req, res) => {
	//search the user if it exists
	try {
		var user = await User.findOne({ email: req.body.email });
		if (user == null) {
			return res.status(400).send({
				message: "Failed! User id doesn't exist",
			});
		}

		// if user is existing,so now we will do the password matching
		const isPasswordValid = bcrypt.compareSync(
			req.body.password,
			user.password
		);
		//if password is invalid
		if (!isPasswordValid) {
			return res.status(401).send({
				message: "Invalid Password",
			});
		}
		/** After successfully login need to generate access token now */
		const token = jwt.sign(
			{ id: user.email, _id: user._id },
			process.env.SECRET_KEY
		);
		res.status(200).send({
			id: user._id,
			accessToken: token,
		});
	} catch (err) {
		res.status(500).send({
			message: "Some thing went wrong",
		});
	}
};
