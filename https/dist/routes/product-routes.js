import { Router } from "express";
import productController from "../controllers/product-controller.js";
import { products, } from "../data/products.js";
const productRouter = Router();
productRouter
    .route("/")
    .get(productController.getAllProduct)
    .post(productController.createProduct);
productRouter
    .route("/:id")
    .put((req, res) => {
    const product = products.find((el) => el.id === Number(req.params.id));
    if (product) {
        product.title = req.body.title;
        product.price = req.body.price;
        res.status(201).json(product);
    }
    else {
        res.status(404).json({ message: "product not found" });
    }
})
    .delete((req, res) => {
    const indexToDelete = products.findIndex((item) => item.id === +req.params.id);
    if (indexToDelete !== -1) {
        products.splice(indexToDelete, 1);
        res.status(200).json({ message: "product deleted" });
    }
    else {
        res.status(404).json({ message: "product not found" });
    }
});
export default productRouter;
// type AnswerType=
// {
//   errors:string|null,
//   data:Array<any>
// }
