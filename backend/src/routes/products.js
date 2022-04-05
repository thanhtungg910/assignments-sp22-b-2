import { Router } from "express";
import productController from "../controllers/products";
import userById from "../controllers/user";
import verify, { isAdmin } from "../middleware/verify";
const router = Router();
// GET & SEARCH ALL
router.get("/", productController.getAll);
// GET ONE BY ID
router.get("/:slug", productController.getSlug);
router.get("/id/:id", productController.getById);
// GET ONE BY ID
router.get("/related/:slug", productController.listRelated);
// SEARCH
router.post("/search", productController.searchfilter);
// CREATE
router.post("/:userId", verify, isAdmin, productController.create);
// EDIT
router.put("/:userId/:id", verify, isAdmin, productController.edit);
router.patch("/:userId/:id", verify, isAdmin, productController.edit);
// REMOVE
router.delete("/:userId/:slug", verify, isAdmin, productController.remove);

router.param("userId", userById)
export default router;
