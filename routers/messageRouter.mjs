import Router from "express";
import { handleMessageRequest, handleMessageCreation } from "../controllers/messageController.mjs";

const messageRouter = Router();

messageRouter.post('/', handleMessageCreation);

messageRouter.get('/', handleMessageRequest);

export default messageRouter;