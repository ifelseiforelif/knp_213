import { Request, Response, NextFunction } from "express";
import productModel from "../models/product.js";

class ProductController {
  getAllProduct(req: Request, res: Response, next: NextFunction): any {
    try {
      res.status(200).json(productModel.getAllProduct());
    } catch (error) {
      res.status(500).send();
    }
    return;
  }
}

export default new ProductController();
