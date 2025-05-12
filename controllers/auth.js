const short = require("short-uuid");
const { auth } = require("../firebase");

const registerCustomer = async (req, res) => {
	const { name, email, password } = req.body;

	try {
		const userRecord = await auth.createUser({
			uid: `cus_${short.generate()}`,
			displayName: name,
			email,
			password,
		});

		res.send(true);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const registerVendor = async (req, res) => {
	const { name, email, password } = req.body;

	try {
		const userRecord = await auth.createUser({
			uid: `ven_${short.generate()}`,
			displayName: name,
			email,
			password,
		});

		res.send(true);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = { registerCustomer, registerVendor };
