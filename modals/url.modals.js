const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
	{
		originalUrl: {
			type: String,
			required: true,
		},
		shortID: {
			type: String,
			unique: true,
			required: true,
		},
		clicked: [
			{
				clickedTime: {
					type: Date,
					default: Date.now,
				},
			},
		],
		expiresIn: {
			type: Date,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Url", urlSchema);
