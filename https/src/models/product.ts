import { connectDb } from "../config/db.js";
import { IProduct } from "../data/products.js";

class Product {
  getAllProduct(): any {
    connectDb.query("SELECT * FROM products", (err, res) => {
      if (err) throw new Error("db error");
      return res;
    });
  }
}

export default new Product();
