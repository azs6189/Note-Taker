// Set Variables
const express = require("express");
const path = require("path");
const router = require("./routes/index");
const PORT = process.env.port || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// GET route for the homepage
app.get("/", (req, res) =>
	res.sendFile(path.join(__dirname, "./public/index.html"))
);

// GEt route for the notes page
app.get("/notes", (req, res) =>
	res.sendFile(path.join(__dirname, "./public/notes.html"))
);

//api
app.use("/api", require("./routes/index"));
app.listen(PORT, () =>
	console.log(`App listening at http://localhost:${PORT} 🚀`)
);
