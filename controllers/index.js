const app = require("./app");
const auth = require("./auth");
const customer = require("./customer");
const vendor = require("./vendor");

module.exports = {
	...app,
	...auth,
	...customer,
	...vendor,
};
