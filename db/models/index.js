const mongoose = require("mongoose");
const connections = require("../db");

const { customerSchema, vendorSchema } = require("../schemas");

const Customer = connections.Customers_DB.model("Customer", customerSchema);
const Vendor = connections.Vendors_DB.model("Vendor", vendorSchema);

module.exports = { Customer, Vendor };
