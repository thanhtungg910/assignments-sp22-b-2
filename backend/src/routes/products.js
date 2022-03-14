import { Router } from "express";
import productController from "../controllers/products";
import check from "../middleware/check";
const router = Router();

// GET ALL
router.get("/", check, productController.getAll);
// CREATE
router.post("/", check, productController.create);

export default router;
