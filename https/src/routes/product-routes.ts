import { Router, Request, Response } from "express";
import productController from "../controllers/product-controller.js";
import {
  products,
  IProduct,
  IProductUpdateOrCreate,
} from "../data/products.js";
import {
  BodyType,
  ParamsAndBodyType,
  ParamsType,
} from "../types/request-types.js";
const productRouter = Router();

productRouter
  .route("/")
  .get(
    productController.getAllProduct,
    (req: Request, res: Response<Array<IProduct>>) => {
      // res.status(200).json(products);
    }
  )
  .post((req: BodyType<IProduct>, res: Response) => {
    products.push(req.body);
    res.status(201).json(req.body);
  });

productRouter
  .route("/:id")
  .put(
    (
      req: ParamsAndBodyType<{ id: string }, IProductUpdateOrCreate>,
      res: Response<{ message: string } | IProduct>
    ) => {
      const product = products.find((el) => el.id === Number(req.params.id));
      if (product) {
        product.title = req.body.title;
        product.price = req.body.price;
        res.status(201).json(product);
      } else {
        res.status(404).json({ message: "product not found" });
      }
    }
  )
  .delete(
    (req: ParamsType<{ id: string }>, res: Response<{ message: string }>) => {
      const indexToDelete = products.findIndex(
        (item) => item.id === +req.params.id
      );
      if (indexToDelete !== -1) {
        products.splice(indexToDelete, 1);
        res.status(200).json({ message: "product deleted" });
      } else {
        res.status(404).json({ message: "product not found" });
      }
    }
  );

export default productRouter;

// type AnswerType=
// {
//   errors:string|null,
//   data:Array<any>
// }
