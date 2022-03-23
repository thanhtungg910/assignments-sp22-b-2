import { Router } from "express";
import authControll from "../controllers/auth";
const router = Router();
router.post("/signup", authControll.signUp);
router.post("/signin", authControll.signIn);
export default router;
