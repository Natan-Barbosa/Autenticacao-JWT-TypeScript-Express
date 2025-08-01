import express, { Request, Response } from "express";
import { userContainer } from "@/containers/user.container";
import { AuthController } from "@/controllers/auth.controller";

const router = express.Router();

router.post("/auth", (req: Request, res: Response) => {
  const authController = userContainer.resolve(AuthController);
  authController.auth(req, res);
});

export { router as AuthRouters };
