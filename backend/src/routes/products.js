import { Router } from "express";
import productController from "../controllers/products";
import userById from "../controllers/user";
import verify, { isAdmin } from "../middleware/verify";
const router = Router();
// GET & SEARCH ALL
router.get("/:userId", productController.getAll);
// GET ONE BY ID
router.get("/:userId/:slug", productController.getSlug);
// GET ONE BY ID
router.get("/related/:slug", productController.listRelated);
// CREATE
router.post("/:userId", verify, isAdmin, productController.create);
// SEARCH
router.post("/search", productController.searchfilter);
// EDIT
router.put("/:id", verify, isAdmin, productController.edit);
router.patch("/:id", verify, isAdmin, productController.edit);
// REMOVE
router.delete("/:slug", verify, isAdmin, productController.remove);

router.param("userId", userById)
export default router;
