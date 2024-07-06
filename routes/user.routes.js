const userController = require("../controller/user.controller");
module.exports = (app) => {
	//Routes for register user
	app.post("/api/v1/auth/signup", userController.signup);
	//Routes for login user
	app.post("/api/v1/auth/signin", userController.signin);
	app.get("/", userController.test);

	//Swagger Docs for signup and signin API
	/**
	 * @swagger
	 * /api/v1/auth/signup:
	 *   post:
	 *     summary: User signup
	 *     description: Register a new user with name, email, and password.
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               name:
	 *                 type: string
	 *                 example: Ashwani Kumar Kushwaha
	 *               email:
	 *                 type: string
	 *                 example: ashwani@gmail.com
	 *               password:
	 *                 type: string
	 *                 example: 1234
	 *     responses:
	 *       200:
	 *         description: User registered successfully
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 message:
	 *                   type: string
	 *                   example: User registered successfully
	 *       400:
	 *         description: User already exists
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 message:
	 *                   type: string
	 *                   example: User Already exist
	 *       500:
	 *         description: Internal server error
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 message:
	 *                   type: string
	 *                   example: Some thing went wrong
	 */

	/**
	 * @swagger
	 * /api/v1/auth/signin:
	 *   post:
	 *     summary: User login
	 *     description: Authenticate a user with email and password.
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               email:
	 *                 type: string
	 *                 example: ashwani@gmail.com
	 *               password:
	 *                 type: string
	 *                 example: 1234
	 *     responses:
	 *       200:
	 *         description: Login Success
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 id:
	 *                   type: string
	 *                   example: 60b6c2f8f8c8c40015e4c6bc
	 *                 accessToken:
	 *                   type: string
	 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
	 *                 message:
	 *                   type: string
	 *                   example: Login Success
	 *       400:
	 *         description: Failed! User doesn't exist
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 message:
	 *                   type: string
	 *                   example: Failed! User doesn't exist
	 *       401:
	 *         description: Invalid Password
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 message:
	 *                   type: string
	 *                   example: Invalid Password
	 *       500:
	 *         description: Internal server error
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 message:
	 *                   type: string
	 *                   example: Some thing went wrong
	 */
};
