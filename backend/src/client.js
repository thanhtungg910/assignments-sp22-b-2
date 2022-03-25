import express from "express";
import morgan from "morgan";
import db from "./config/connect";
import refreshToken from "./routes/refreshToken";
const app = express();
// MIDDLEWARE
app.use(morgan());
app.use(express.json());

app.use("/refreshtoken", refreshToken);
db.connect();
app.listen(8000, () => {
	console.log("running port 8000 client");
});
