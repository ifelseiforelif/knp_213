import express from "express";
import "dotenv/config";
import router from "./routers.js";
import user_routes from "./routers/user-routers.js";
import product_routes from "./routers/product-routers.js";
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static("public")); //middleware
//app.use("/test", router);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
app.use("/user", user_routes);
app.use("/product", product_routes);
// app.get("/", (req, res) => {
//   //res.status(202).json({ status: "success" });
//   //   res.status(200).send("<h1>NodeJS</h1>");
//   res.sendFile(path.join(import.meta.dirname, "public", "pages", "index.html"));
// });

// app.get("/products/:id", (req, res) => {
//   //res.status(202).json({ status: "success" });
//   res.status(200).send(`<h1>Products ${req.params.id}</h1>`);
// });

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
