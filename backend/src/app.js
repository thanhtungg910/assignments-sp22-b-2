import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
/* import { readdirSync } from "fs";
console.log("🚀 ~ file: app.js ~ line 6 ~ readdirSync", readdirSync("./src/routes")); */
import db from "./config/connect";
import products from "./routes/products";
import categories from "./routes/categories";
import auth from "./routes/auth";
import colors from "./routes/colors";
dotenv.config();
import refreshToken from "./routes/refreshToken";
const app = express();
// MIDDLEWARE
app.use(morgan());
app.use(express.json());
// app.use(express.cookieParser())
app.use(cors());

//ROUTING
app.use("/refreshtoken", refreshToken);
app.use("/api/products", products);
app.use("/api/categories", categories);
app.use("/api/users", auth);
app.use("/api/colors", colors);

app.get("/", (req, res) => {
	res.send("<h1>HOME PAGE</h1>");
});

//CONNECT DB
db.connect();

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
	console.log("Running port " + PORT);
});
