import { Router } from "express";
import ColorsControl from "../controllers/colors";
const route = Router();
route.get("/", ColorsControl.list);
export default route;
