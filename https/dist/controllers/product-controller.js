import productModel from "../models/product.js";
class ProductController {
    getAllProduct(req, res, next) {
        try {
            res.status(200).json(productModel.getAllProduct());
        }
        catch (error) {
            res.status(500).send();
        }
        return;
    }
    createProduct(req, res, next) {
        try {
            const new_product = productModel.createProduct(req.body);
            res.status(201).json({ ...req.body, id: new_product?.insertId });
        }
        catch (error) {
            console.log(error);
            res.status(500).send();
        }
        return;
    }
}
export default new ProductController();
