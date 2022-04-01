import { Router } from "express";
import cartControl from "../controllers/cart";
const router = Router();
router.post("/order", cartControl.create);
export default router;
