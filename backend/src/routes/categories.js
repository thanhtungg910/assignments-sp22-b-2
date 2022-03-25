import { Router } from "express";
import categoryControll from "../controllers/categories";
import verify from "../middleware/verify";
const router = Router();

// GET ALL
router.get("/", verify, categoryControll.getAll);
//
router.get("/:slug", verify, categoryControll.getproductsBySlug);
// CREATE
router.post("/", verify, categoryControll.create);
// DELETE
router.delete("/:slug", verify, categoryControll.remove);
export default router;
