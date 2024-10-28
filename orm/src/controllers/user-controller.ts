import { Request, Response } from "express";
import { User } from "../models/user-model";

export class UserController {
  static async create(
    req: Request<{}, {}, { login: string }>,
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
}
