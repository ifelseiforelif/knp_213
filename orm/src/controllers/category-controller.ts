import { Category } from "../models/category-model";
import { Request, Response, NextFunction } from "express";
import { Product } from "../models/product-model";

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
        .json({ message: "Category created", data: category.dataValues });
    } else {
      return res.status(500).json({ message: "Error" });
    }
  }

  static async getCategoryById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const { id } = req.params;
    const categories = await Category.findByPk(id, { include: [Product] });
    if (categories) {
      return res.status(200).json({ message: "All data", data: categories });
    } else {
      return res.status(500).json({ message: "Error" });
    }
  }
}
