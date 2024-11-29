import { Sequelize } from "sequelize-typescript";
import { Category } from "../models/category-model";
import { Product } from "../models/product-model";
import "dotenv/config";
import { User } from "../models/user-model";
import { Profile } from "../models/profile-model";
import { Post } from "../models/post-model";
import { Group } from "../models/group-model";
import { UserGroup } from "../models/user-group-model";

export const connection = new Sequelize({
  dialect: "mysql",
  timezone: process.env.DB_TIMEZONE,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  models: [Category, Product, User, Post, Profile],
});
