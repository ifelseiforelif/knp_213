import { Request, Response } from "express";
import { Post } from "../models/post-model";
import { User } from "../models/user-model";
export class PostController {
  static async create(
    req: Request<
      {},
      {},
      { title: string; description: string; user_id: number }
    >,
    res: Response
  ): Promise<any> {
    const post = await Post.create({ ...req.body });
    if (post) {
      return res
        .status(201)
        .json({ message: "Post created successfully", data: post.dataValues });
    } else {
      return res.status(500).json({ message: "Error" });
    }
  }

  static async readAll(req: Request, res: Response): Promise<any> {
    const posts = await Post.findAll({include: User});
    if (posts) {
      return res.status(200).json({ message: "All data", data: posts });
    } else {
      return res.status(500).json({ message: "Error" });
    }
  }
}
