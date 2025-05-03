const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
	res.json({ name: "Zuchy Online" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Started @ ${PORT}`));
