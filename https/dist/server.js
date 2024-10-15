import express from "express";
import https from "node:https";
import path from "node:path";
import fs from "node:fs";
import productRouter from "./routes/product-routes.js";
const PORT = 443;
const app = express();
const __dirname = import.meta.dirname;
const options = {
    key: fs.readFileSync(path.join(__dirname, "..", "cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "..", "cert", "cert.pem")),
};
app.use("/product", productRouter);
https
    .createServer(options, app)
    .listen(PORT, () => console.log(`https://127.0.0.1`));
