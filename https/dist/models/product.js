import { connectDb } from "../config/db.js";
class Product {
    getAllProduct() {
        connectDb.query("SELECT * FROM products", (err, res) => {
            if (err)
                throw new Error("db error");
            return res;
        });
    }
    createProduct(product) {
        connectDb.query("INSERT INTO products(title, price) VALUES(?,?)", [product.title, product.price], (err, res) => {
            if (err)
                throw new Error("db error");
            console.log(res);
            return res;
        });
    }
}
export default new Product();
