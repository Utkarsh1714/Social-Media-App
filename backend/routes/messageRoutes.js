import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import {
  getConversations,
  GetMessages,
  sendMessage,
} from "../controller/messageController.js";

const router = express.Router();

router.get("/conversations", protectRoute, getConversations);
router.get("/:otherUserId", protectRoute, GetMessages);
router.post("/", protectRoute, sendMessage);

export default router;
