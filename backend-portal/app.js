require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const passport = require("passport");
const cors = require("cors");
const fileupload = require("express-fileupload");
const database = require("./configuration/database");
const routes = require("./routes");
// const jobs = require("./jobs");
const app = express();
require("./configuration/passport")(passport);

const whitelist = process.env.ORIGIN ? process.env.ORIGIN.split(',') : '*'
const corsOptions = {
	origin: function (origin, callback) {
		if (whitelist.indexOf(origin) !== -1) {
			callback(null, true)
		} else {
			callback(new Error('Not allowed by CORS'))
		}
	}
}

console.log(process.env.ORIGIN.split(','));
database.connect();

app
	.use(logger("dev"))
	.use(express.json({ limit: "256mb" }))
	.use(express.urlencoded({ extended: false, limit: "256mb" }))
	.use(fileupload())
	.use(passport.initialize())
	.use(passport.session())
	.use(cors(whitelist !== '*' ? corsOptions : undefined))
	.use(cookieParser())
	.use(express.static(path.join(__dirname, "public")))

	.get("/", (req, res) => {
		res.send("403 Forbidden")
	})
	.use("/api", routes);


module.exports = app;

