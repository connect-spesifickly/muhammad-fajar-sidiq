import { Router } from "express";
import { emailRouter } from "./email.router";

const apiRouter = Router();

apiRouter.use("/email", emailRouter());

export default apiRouter;
