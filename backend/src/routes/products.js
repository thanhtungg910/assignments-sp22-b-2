import { Router } from "express";
import productController from "../controllers/products";
import verify, { isAdmin } from "../middleware/verify";
const router = Router();
// GET & SEARCH ALL
router.get("/", verify, isAdmin, productController.getAll);
// GET ONE BY ID
router.get("/:slug", verify, productController.getById);
// CREATE
router.post("/", verify, isAdmin, productController.create);
router.post("/search", verify, productController.searchfilter);
// EDIT
router.put("/:id", verify, productController.edit);
router.patch("/:id", verify, productController.edit);
// REMOVE
router.delete("/:slug", verify, productController.remove);
export default router;
