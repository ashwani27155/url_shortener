module.exports = {
	DB_NAME: "url_shortener",
	// DB_URL: "mongodb://localhost/url_shortener",
	DB_URL: `mongodb+srv://abicashwani:${process.env.DB_PASSWORD}@cluster0.pynjlmq.mongodb.net/url_shortener`,
};
