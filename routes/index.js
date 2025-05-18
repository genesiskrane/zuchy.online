const express = require("express");
const router = express.Router();
const controller = require("../controllers");


// AUTHENTICATIONS
router.post("/register-customer", controller.registerCustomer);
router.post("/register-vendor", controller.registerVendor);

// APP
router.get("/get-user", controller.getUser);

// Vendor
// router.get("/app/getProfile", controller.getProfile);

module.exports = router;
