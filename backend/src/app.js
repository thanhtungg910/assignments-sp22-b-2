import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
// import http from "http";
import { Server } from "socket.io";
// const io = require('socket.io')(3001, {
// 	cors: {
// 		origin: ['http://localhost:5001']
// 	}
// })
/* import { readdirSync } from "fs";
console.log("🚀 ~ file: app.js ~ line 6 ~ readdirSync", readdirSync("./src/routes")); */
import db from "./config/connect";
import products from "./routes/products";
import categories from "./routes/categories";
import auth from "./routes/auth";
import colors from "./routes/colors";
import carts from "./routes/cart";
import messages from "./routes/messages";
import conversation from "./routes/conversation";
dotenv.config();
import refreshToken from "./routes/refreshToken";
const app = express();
// const server = http.createServer(app);
const io = new Server(3001, {
	cors: {
		origin: [process.env.IO_URL] //Nếu không chạy đc 3001 thì chuyển tiếp tới đây
	}
})

// MIDDLEWARE
app.use(morgan());
app.use(express.json());
// app.use(express.cookieParser())
app.use(cors());
//
io.on("connection", (socket) => {//`%c${body}`
	console.log(`%c${'--->Socket connected<---'}`, `color: green; font-weight: bold; font-size: 2rem;`);
	socket.on("on-data", (...args) => {
		console.log("🚀 ~ file: app.js ~ line 48 ~ io.on ~ data", { ...args });
		io.emit("response", { message: { ...args } })
	})

})
//ROUTING
app.use("/refreshtoken", refreshToken);
app.use("/api/products", products);
app.use("/api/categories", categories);
app.use("/api/users", auth);
app.use("/api/carts", carts);
app.use("/api/colors", colors);
//CHAT
app.use("/chats/messages", messages)
app.use("/chats/conversation", conversation)

app.get("/", (req, res) => {
	res.send("<h1>HOME PAGE</h1>");
});

//CONNECT DB
db.connect();


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
	console.log("Running port " + PORT);
});
