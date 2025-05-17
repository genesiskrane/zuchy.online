const models = require("./models");
const connections = require("./db");

async function waitForConnection(connection, name) {
	return new Promise((resolve, reject) => {
		connection.once("open", () => {
			console.log(`Connected to ${name}`);
			resolve();
		});
		connection.on("error", reject);
	});
}

async function connectToDatabase() {
	try {
		await Promise.all([
			waitForConnection(connections.Vendors_DB, "Vendors Database"),
			waitForConnection(connections.Customers_DB, "Customers Database"),
			waitForConnection(connections.Drinks_DB, "Drinks Database"),
		]);
	} catch (error) {
		console.error("Database connection error:", error);
	}
}

module.exports = {
	connectToDatabase,
	...models,
};
