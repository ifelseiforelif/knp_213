import { Request, Response } from "express";
import { User } from "../models/user-model";
import { Post } from "../models/post-model";

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
    const users = await User.findAll({ include: Post });
    if (users) {
      return res.status(200).json({ message: "All data", data: users });
    } else {
      return res.status(500).json({ message: "Error" });
    }
  }
}
