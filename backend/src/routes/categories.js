import { Router } from "express";
import categoryControll from "../controllers/categories";
import check from "../middleware/check";
const router = Router();

// GET ALL
router.get("/", check, categoryControll.getAll);
//
router.get("/:slug", check, categoryControll.getproductsBySlug);
// CREATE
router.post("/", check, categoryControll.create);
// DELETE
router.delete("/:slug", check, categoryControll.remove);
export default router;
