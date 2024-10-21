import express from "express";
import { connection } from "./config/config";
import { categoryRouter } from "./routes/category-route";
const server = express();
const PORT = 3000;
connection
  .sync()
  .then(() => {
    console.log("ok");
    server.use(express.json());
    server.use("/category", categoryRouter);
    server.listen(PORT, () =>
      console.log(`Server is running http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error(err));
