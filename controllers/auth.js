const short = require("short-uuid");
const { auth } = require("../firebase");
const { gkrane } = require("../api");
const { Customer, Vendor } = require("../db");

// CONTROLLERS

const registerCustomer = async (req, res) => {
	const { name, email, password } = req.body;

	// SAVE TO FIREBASE AUTH
	try {
		const userRecord = await auth.createUser({
			uid: `cus_${short.generate()}`,
			displayName: name,
			email,
			password,
		});

		// SAVE TO MONGODB
		try {
			const customer = new Customer({
				_id: userRecord.uid,
				displayName: userRecord.displayName,
				email: userRecord.email,
			});

			await customer.save();
			res.send(true);
		} catch (error) {
			res.status(400).send(error.message);
		}
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const registerVendor = async (req, res) => {
	const { name, email, password } = req.body;

	// SAVE TO FIREBASE AUTH
	try {
		const userRecord = await auth.createUser({
			uid: `ven_${short.generate()}`,
			displayName: name,
			email,
			password,
		});

		// SAVE TO GKRANE
		try {
			const { data } = await gkrane.post("/register-vendor", {
				uid: userRecord.uid,
				displayName: userRecord.displayName,
				email: userRecord.email,
				vendor: "wine-&-alcohol",
			});

			// SAVE TO MONGODB
			try {
				const vendor = new Vendor({
					_id: userRecord.uid,
					displayName: userRecord.displayName,
					email: userRecord.email,
				});

				await vendor.save();
				res.send(true);
			} catch (error) {
				res.status(400).send(error.message);
			}
		} catch (error) {
			res.status(400).send(error.message);
		}
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = { registerCustomer, registerVendor };
