const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema(
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
					};
					return profile;
				},
			},
		},
		methods: {},
		statics: {},
	}
);

vendorSchema.set("toObject", { virtuals: true });
vendorSchema.set("toJSON", { virtuals: true });

module.exports = vendorSchema;
