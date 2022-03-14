import { Router } from "express";
import productController from "../controllers/products";
import check from "../middleware/check";
const router = Router();
// GET ALL
router.get("/", check, productController.getAll);
// SEARCH
router.get("/search/:title", check, productController.searchTitle);
// GET BY ID
router.get("/:id", check, productController.getById);
// CREATE
router.post("/", check, productController.create);
// EDIT
router.put("/:id", check, productController.edit);
router.patch("/:id", check, productController.edit);
// REMOVE
router.delete("/:id", check, productController.remove);
export default router;
