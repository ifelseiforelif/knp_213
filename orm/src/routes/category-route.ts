import { Router } from "express";
import { CategoryController } from "../controllers/category-controller";

export const categoryRouter = Router();
categoryRouter.get("/", CategoryController.getAllCategory);
categoryRouter.post("/", CategoryController.createCategory);
