import { Router } from "express";
import authControll from "../controllers/auth";
import userById from "../controllers/user";
import verify, { isAdmin } from "../middleware/verify";
const router = Router();
router.get("/:userId", verify, isAdmin, authControll.list);
router.put("/:userId/:id", verify, isAdmin, authControll.setStatus);
router.post("/signup", authControll.signUp);
router.post("/signin", authControll.signIn);
router.delete("/logout/:userId", authControll.logOut)
router.put("/wishlist/:id", authControll.wishList);
router.get("/readwishlist/:id", authControll.getWishList);
router.param("userId", userById)
export default router;
