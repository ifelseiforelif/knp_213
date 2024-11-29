import express from "express";
import { connection } from "./config/config";
import { categoryRouter } from "./routes/category-route";
import "dotenv/config";
import https from "node:https";
import fs from "node:fs";
import path from "node:path";
import { userRouter } from "./routes/user-routes";
import { postRouter } from "./routes/post-routes";
import { profileRouter } from "./routes/profile-routes";
import { client } from "./config/redis";
const server = express();
const PORT = process.env.PORT || 443;

const run = async () => {
  await connection.sync({ alter: true });
  console.log("dbconnection successfully");
  await client.connect();
  console.log("redis connection successfully");
  const options = {
    key: fs.readFileSync(path.join(__dirname, "..", "cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "..", "cert", "cert.pem")),
  };
  server.use(express.json());
  server.use("/category", categoryRouter);
  server.use("/user", userRouter);
  server.use("/post", postRouter);
  server.use("/profile", profileRouter);

  https
    .createServer(options, server)
    .listen(PORT, () =>
      console.log(`Server is running https://localhost:${PORT}`)
    );
};

run();

// connection
//   .sync({ alter: true })
//   .then(() => {
//     console.log("dbconnection successfully");
//     const options = {
//       key: fs.readFileSync(path.join(__dirname, "..", "cert", "key.pem")),
//       cert: fs.readFileSync(path.join(__dirname, "..", "cert", "cert.pem")),
//     };
//     server.use(express.json());
//     server.use("/category", categoryRouter);
//     server.use("/user", userRouter);
//     server.use("/post", postRouter);
//     server.use("/profile", profileRouter);

//     https
//       .createServer(options, server)
//       .listen(PORT, () =>
//         console.log(`Server is running https://localhost:${PORT}`)
//       );
//   })
//   .catch((err) => console.error(err));
