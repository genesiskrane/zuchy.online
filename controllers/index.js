const auth = require("./auth");
const customer = require("./customer");
const vendor = require("./vendor");

module.exports = {
	...auth,
	...customer,
	...vendor,
};
