import { Router } from "express";
import cartControl from "../controllers/cart";
import verify, { isAdmin } from "../middleware/verify";
import userById from '../controllers/user'
const router = Router();
router.post("/order", cartControl.create);
router.get("/order", /* verify, isAdmin, */ cartControl.getOrderList);
router.put("/order/:id", /* verify, isAdmin, */ cartControl.updatetOrderList);

router.param("userId", userById)
export default router;
