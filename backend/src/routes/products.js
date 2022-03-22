import { Router } from "express";
import productController from "../controllers/products";
import check from "../middleware/check";
const router = Router();
// GET & SEARCH ALL
router.get("/", check, productController.getAll);
// GET ONE BY ID
router.get("/:slug", check, productController.getById);
// CREATE
router.post("/", check, productController.create);
router.post("/search", check, productController.searchfilter);
// EDIT
router.put("/:slug", check, productController.edit);
router.patch("/:slug", check, productController.edit);
// REMOVE
router.delete("/:slug", check, productController.remove);
export default router;
