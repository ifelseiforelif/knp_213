import { Sequelize } from "sequelize-typescript";
import { Category } from "../models/category-model";

export const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "knp213",
  models: [Category],
});
