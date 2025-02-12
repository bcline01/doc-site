import express, { Router, Request, Response, RequestHandler } from "express";
import { register, login } from "../controllers/authController";

const router: Router = express.Router();

const registerHandler: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  await register(req, res);
};

const loginHandler: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  await login(req, res);
};

router.post("/register", registerHandler);
router.post("/login", loginHandler);

export default router;
