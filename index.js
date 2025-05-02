const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (_, res) => {
	res.send("Hello from Zuchy");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server Started @ ${PORT}`);
});
