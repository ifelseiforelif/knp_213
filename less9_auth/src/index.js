import express from "express";
import exphbs from "express-handlebars";
import path from "node:path";
import "dotenv/config";
import siteRoutes from "./routes/site-routes.js";
import userRoutes from "./routes/user-routes.js";
const PORT = process.env.PORT || 3000;
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
});
const server = express();
server.use(express.static("public"));
server.engine("hbs", hbs.engine);
server.set("view engine", "hbs");
server.set("views", path.join("src", "views"));
server.use(siteRoutes);
server.use(userRoutes);
server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}`)
);