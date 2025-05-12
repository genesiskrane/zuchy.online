const express = require("express");
const router = express.Router();
const controller = require("../controllers");


// auth
router.post("/auth/register-customer", controller.registerCustomer);
router.post("/auth/register-vendor", controller.registerVendor);

// Vendor
// router.get("/vendor", controller.getApp);
// router.get("/app/getProfile", controller.getProfile);

module.exports = router;
