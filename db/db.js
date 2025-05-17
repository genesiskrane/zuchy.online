const mongoose = require("mongoose");

const mongoDB_URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_DOMAIN}`;
const mongoDB_URL_append = "?retryWrites=true&w=majority&appName=Z0";

const Customers_DB = mongoose.createConnection(
	`${mongoDB_URL}/Customers${mongoDB_URL_append}`
);

const Vendors_DB = mongoose.createConnection(
	`${mongoDB_URL}/Vendors${mongoDB_URL_append}`
);

const Drinks_DB = mongoose.createConnection(
	`${mongoDB_URL}/Drinks${mongoDB_URL_append}`
);

module.exports = { Customers_DB, Vendors_DB, Drinks_DB };
