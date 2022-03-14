import { Router } from "express";
import categoryControll from "../controllers/categories";
import check from "../middleware/check";
const router = Router();

// GET ALL
router.get("/", check, categoryControll.getAll);
// DETAILS
router.get("/:id", check, categoryControll.details);
// CREATE
router.post("/", check, categoryControll.create);
// DELETE
router.delete("/:id", check, categoryControll.remove);
export default router;
