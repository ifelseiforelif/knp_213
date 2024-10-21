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
}
export default new ProductController();
