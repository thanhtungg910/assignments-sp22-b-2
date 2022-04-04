import { Router } from "express";
import conversationControll from "../controllers/conversation"
const router = Router();
router.post("/", conversationControll.createConversation);
router.get("/:userId", conversationControll.getConversation);
export default router