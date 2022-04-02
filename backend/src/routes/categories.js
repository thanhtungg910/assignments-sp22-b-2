import { Router } from "express";
import categoryControll from "../controllers/categories";
import userById from "../controllers/user";
import verify, { isAdmin } from "../middleware/verify";
const router = Router();

// GET ALL
router.get("/", categoryControll.getAll);
//
router.get("/:slug", categoryControll.getproductsBySlug);
// CREATE
router.post("/:userId", verify, isAdmin, categoryControll.create);
// EDIT
router.patch("/:userId/:slug", verify, isAdmin, categoryControll.update);
// DELETE
router.delete("/:userId/:slug", verify, isAdmin, categoryControll.remove);

router.param("userId", userById)
export default router;
