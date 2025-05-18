require("./config");
const { init } = require("./core");

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const router = require("./routes");

const app = express();

// HTTPS Redirect
app.use((req, res, next) => {
	if (process.env.NODE_ENV == "production")
		if (req.headers["x-forwarded-proto"] !== "https") {
			return res.redirect(`https://${req.headers.host}${req.url}`);
		}
	next();
});

app.set("trust proxy", true);

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.get("/", (_, res) => {
	res.json({ name: `${process.env.APP_NAME} Online` });
});

// Catch All
app.all("/{*any}", (req, res) => {
	res.json({});
});

const PORT = process.env.PORT || 5000;

(async () => {
	await init();

	app.listen(PORT, () => {
		console.log(`Server Started @ ${PORT}`);
	});
})();
