import { Router } from "express";
import categoryControll from "../controllers/categories";
import check from "../middleware/check";
const router = Router();

// GET ALL
router.get("/", check);
// DETAILS
// CREATE
router.post("/", check, categoryControll.create);
export default router;
