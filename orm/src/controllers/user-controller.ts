import { Request, Response } from "express";
import { User } from "../models/user-model";
import { Post } from "../models/post-model";
import { client } from "../config/redis";

export class UserController {
  static async create(
    req: Request<{}, {}, { login: string; role?: string }>,
    res: Response
  ): Promise<any> {
    const user = await User.create({ ...req.body });
    console.log(user);
    if (user) {
      return res
        .status(201)
        .json({ message: "User created successfully", data: user.dataValues });
    } else {
      return res.status(500).json({ message: "Error" });
    }
  }

  static async readAll(req: Request, res: Response): Promise<any> {
    const usersFromRedis = await client.get("users");
    if (usersFromRedis) {
      console.log("reading cache...");
      return res
        .status(200)
        .json({ message: "All data", data: JSON.parse(usersFromRedis) });
    }
    const users = await User.scope("adminUser").findAll({ include: Post });
    if (users) {
      await client.set("users", JSON.stringify(users), { EX: 120 });
      return res.status(200).json({ message: "All data", data: users });
    }
    return res.status(500).json({ message: "Error" });
  }
}
