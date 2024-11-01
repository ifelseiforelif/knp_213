import { Request, Response, NextFunction } from "express";
import productModel from "../models/product.js";
import { BodyType } from "../types/request-types.js";
import { IProductUpdateOrCreate } from "../data/products.js";

class ProductController {
  getAllProduct(req: Request, res: Response, next: NextFunction): any {
    try {
      res.status(200).json(productModel.getAllProduct());
    } catch (error) {
      res.status(500).send();
    }
    return;
  }

  createProduct(
    req: BodyType<IProductUpdateOrCreate>,
    res: Response,
    next: NextFunction
  ): any {
    try {
      const new_product = productModel.createProduct(req.body);
      res.status(201).json({ ...req.body, id: new_product?.insertId });
    } catch (error) {
      console.log(error);
      res.status(500).send();
    }
    return;
  }
}

export default new ProductController();
