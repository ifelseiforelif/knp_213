import { connectDb } from "../config/db.js";
class Product {
    getAllProduct() {
        connectDb.query("SELECT * FROM products", (err, res) => {
            if (err)
                throw new Error("db error");
            return res;
        });
    }
}
export default new Product();
