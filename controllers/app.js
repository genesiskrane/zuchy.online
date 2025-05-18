const { Customer, Vendor } = require("../db");

// CONTROLLERS
const getUser = async (req, res) => {
	const uid = req.query.uid;

	let User;

	if (uid.startsWith("cus_")) User = Customer;
	if (uid.startsWith("ven_")) User = Vendor;

	try {
		const { profile } = await User.findById(uid);

		res.json(profile);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = { getUser };
