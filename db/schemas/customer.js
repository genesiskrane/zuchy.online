const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
	{
		_id: { type: String, required: true },
		displayName: { type: String, required: true },
		email: { type: String, required: true },
		auth: {
			v_code: { type: String },
		},
	},
	{
		virtuals: {
			profile: {
				get() {
					const profile = {
						_id: this._id,
						displayName: this.displayName,
						email: this.email,
						account: "customer",
					};
					return profile;
				},
			},
		},
		methods: {},
		statics: {},
	}
);

customerSchema.set("toObject", { virtuals: true });
customerSchema.set("toJSON", { virtuals: true });

module.exports = customerSchema;
