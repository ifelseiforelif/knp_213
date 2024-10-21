import express, { Request, Response } from "express";
import https from "node:https";
import path from "node:path";
import fs from "node:fs";
import { connectDb } from "./config/db.js";
import productRouter from "./routes/product-routes.js";
const PORT = 443;

const run = () => {
  const app = express();
  const __dirname = import.meta.dirname;

  const options = {
    key: fs.readFileSync(path.join(__dirname, "..", "cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "..", "cert", "cert.pem")),
  };
  app.use(express.json());
  app.use("/products", productRouter);

  https
    .createServer(options, app)
    .listen(PORT, () => console.log(`https://127.0.0.1`));
};

connectDb.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    run();
  }
});
