const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

const products = [
	{
		id: 1,
		name: "Some product",
	},
	{
		id: 2,
		name: "Some other product",
	},
	{
		id: 3,
		name: "Bad product",
	},
];

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/products", (req, res) => {
	res.json({ data: products });
});

app.get("/products/:id", (req, res) => {
	console.log(req.params);

	const { id } = req.params;

	const product = products.find((p) => p.id === Number(id));

	console.log(product);

	if (product) {
		return res.json(product);
	}

	return res.status(404).json({ message: `Product with id of ${id} not found` });
});

app.post("/login", (req, res) => {
	console.log(req.body);

	const { email, password } = req.body;

	if (email === "connor@stud.noroff.no" && password === "11111111") {
		return res.json({ accessToken: "1213123123" });
	}

	return res.status(400).json({ message: "Nah" });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
