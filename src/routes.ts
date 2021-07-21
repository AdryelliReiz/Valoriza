import { Router } from "express";
import { CreateTagController } from "./controller/CreateTagController";
import { CreateUserController } from "./controller/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post("/users", createUserController.handle);

router.post("/tags", createTagController.handle);

export { router };