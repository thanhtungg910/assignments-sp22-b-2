import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(morgan());
app.use(express.json());

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
	console.log("Running port " + PORT);
});
