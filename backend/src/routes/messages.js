import { Router } from "express";
import messageControll from "../controllers/messages";
import verify, { isAdmin } from "../middleware/verify";
const router = Router();

router.post("/", messageControll.sendMess)

// router.param("userId", userById)
export default router;
