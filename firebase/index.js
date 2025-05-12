const admin = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);

const app = admin.initializeApp({
	credential: admin.cert(serviceAccount),
});

const auth = getAuth(app);

module.exports = { auth };
