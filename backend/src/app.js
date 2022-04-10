import express from "express";
const app = express();
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import http from "http";
import socketio from "socket.io";

import db from "./config/connect";
import products from "./routes/products";
import categories from "./routes/categories";
import auth from "./routes/auth";
import colors from "./routes/colors";
import carts from "./routes/cart";
dotenv.config();
import refreshToken from "./routes/refreshToken";
const server = http.createServer(app);
const io = socketio(server, {
	cors: {
		origin: process.env.IO_URL
	}
})
io.on("connection", (socket) => {
	console.log('socket connected ');
	socket.on('notify', (data) => {
		console.log(data);
	})
})
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
app.use("/api/carts", carts);
app.use("/api/colors", colors);

app.get("/", (req, res) => {
	res.send("<h1>HOME PAGE</h1>");
});

//CONNECT DB
db.connect();

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
	console.log("Running port " + PORT);
});
