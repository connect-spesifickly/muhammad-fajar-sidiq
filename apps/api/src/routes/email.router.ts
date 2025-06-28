import { Router } from "express";
import emailController from "../controllers/email.controller";

export const emailRouter = () => {
  const router = Router();
  router.post("/", emailController.sendEmail);
  return router;
};
