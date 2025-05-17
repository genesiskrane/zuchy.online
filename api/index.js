const axios = require("axios");
const config = require("../config");

const gkrane = axios.create({
	baseURL: `${config.gkrane}/api`,
	headers: {
		"Content-Type": "application/json",
	},
	timeout: 5000,
});

module.exports = { gkrane };
