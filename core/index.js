const connect = require("../db").connectToDatabase;

const init = async () => {
	await connect();
};

module.exports = { init };
