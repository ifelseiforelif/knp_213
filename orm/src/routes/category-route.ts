import { Router } from "express";
import { CategoryController } from "../controllers/category-controller";

export const categoryRouter = Router();
categoryRouter
  .route("/")
  .get(CategoryController.getAllCategory)
  .post(CategoryController.createCategory);
categoryRouter.get("/:id", CategoryController.getCategoryById);
