import express from "express";
const app = express();
import cors from "cors";
import morgan from "morgan";
import http from "http";
import dotenv from "dotenv";
import socketio from "socket.io"

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
// import { addUser, getUser } from "./controllers/usersChat";
import { addUser, removeUser, getUser, getUsersInRoom } from "./userChat"
const server = http.createServer(app);
const io = socketio(server, {
	cors: {
		origin: process.env.IO_URL
	}
})

// MIDDLEWARE
app.use(morgan());
app.use(express.json());
app.use(cors());
//
io.on("connection", (socket) => {
	console.log("🚀--->Socket connected<---");
	socket.on('join', ({ name, room }, callback) => {
		const { error, user } = addUser({ id: socket.id, name, room });

		if (error) return callback(error);

		socket.join(user.room);
		socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.` });
		socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

		io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

		callback();
	});

	socket.on('sendMessage', (message, callback) => {
		const user = getUser(socket.id);

		io.to(user.room).emit('message', { user: user.name, text: message });

		callback();
	});

	socket.on("disconnect", () => {
		console.log('🚀 disconnect');
		const user = removeUser(socket.id);
		if (user) {
			io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
			io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
		}
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
server.listen(PORT, () => {
	console.log("Running port " + PORT);
});
