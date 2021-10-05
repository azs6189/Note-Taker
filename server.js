// Require dependencies
const { application } = require("express");
const express = require("express");
const fs = require("fs");
const path = require("path");

// Begin express app
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
application.use(express.static(__dirname));

require("./routes/routes")(app);

app.listen(PORT, function () {
	console.log("App listening on PORT: " + PORT);
});
