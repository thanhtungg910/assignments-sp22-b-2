import { Router } from "express";
import productController from "../controllers/products";
import verify, { isAdmin } from "../middleware/verify";
const router = Router();
// GET & SEARCH ALL
router.get("/", productController.getAll);
// GET ONE BY ID
router.get("/:slug", productController.getSlug);
// GET ONE BY ID
router.get("/related/:slug", productController.listRelated);
// CREATE
router.post("/", verify, isAdmin, productController.create);
// SEARCH
router.post("/search", productController.searchfilter);
// EDIT
router.put("/:id", verify, isAdmin, productController.edit);
router.patch("/:id", verify, isAdmin, productController.edit);
// REMOVE
router.delete("/:slug", verify, isAdmin, productController.remove);
export default router;
