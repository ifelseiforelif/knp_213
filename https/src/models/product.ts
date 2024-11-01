import { connectDb } from "../config/db.js";
import { IProductUpdateOrCreate } from "../data/products.js";

class Product {
  getAllProduct(): any {
    connectDb.query("SELECT * FROM products", (err, res) => {
      if (err) throw new Error("db error");
      return res;
    });
  }

  createProduct(product: IProductUpdateOrCreate): any {
    connectDb.query(
      "INSERT INTO products(title, price) VALUES(?,?)",
      [product.title, product.price],
      (err, res) => {
        if (err) throw new Error("db error");
        console.log(res);
        return res;
      }
    );
  }
}

export default new Product();
