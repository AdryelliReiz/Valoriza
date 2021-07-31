import { Router } from "express";
import { CreateTagController } from "./controller/CreateTagController";
import { CreateUserController } from "./controller/CreateUserController";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();

router.post("/users", createUserController.handle);

router.post("/tags", ensureAdmin,createTagController.handle);

router.post("/login", authenticateUserController.handle);

export { router };