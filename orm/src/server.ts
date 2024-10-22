import express from "express";
import { connection } from "./config/config";
import { categoryRouter } from "./routes/category-route";
import "dotenv/config";
import https from "node:https";
import fs from "node:fs";
import path from "node:path";
const server = express();
const PORT = process.env.PORT || 443;
connection
  .sync()
  .then(() => {
    console.log("dbconnection successfully");
    const options = {
      key: fs.readFileSync(path.join(__dirname, "..", "cert", "key.pem")),
      cert: fs.readFileSync(path.join(__dirname, "..", "cert", "cert.pem")),
    };
    server.use(express.json());
    server.use("/category", categoryRouter);
    https
      .createServer(options, server)
      .listen(PORT, () =>
        console.log(`Server is running https://localhost:${PORT}`)
      );
  })
  .catch((err) => console.error(err));
