import { Category } from "../models/category-model";
import { Request, Response, NextFunction } from "express";

export class CategoryController {
  static async getAllCategory(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const categories = await Category.findAll();
    if (categories) {
      return res.status(200).json({ message: "All data", data: categories });
    } else {
      return res.status(500).json({ message: "Error" });
    }
  }

  static async createCategory(
    req: Request<{}, {}, { title: string }>,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const category = await Category.create({ ...req.body });
    console.log(category);
    if (category) {
      return res
        .status(201)
        .json({ message: "Category created", data: req.body });
    } else {
      return res.status(500).json({ message: "Error" });
    }
  }
}
