import Router from "express";
import { handleIndexRequest } from "../controllers/indexController.mjs";

const indexRouter = Router();

indexRouter.get('/', handleIndexRequest);

export default indexRouter;