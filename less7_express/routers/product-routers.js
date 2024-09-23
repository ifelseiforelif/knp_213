import { Router } from "express";
import path from "node:path";
const __dirname = path.dirname(import.meta.dirname);
const product_routes = Router();

product_routes
  .route("/")
  .get((req, res) => {
    console.log(req.query);
    res.sendFile(path.join(__dirname, "public", "pages", "form.html"));
  })
  .post((req, res) => {
    console.log(req.body);
    res.status(201).json({ status: "success" });
  });

export default product_routes;
