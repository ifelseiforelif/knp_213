import { Request, Response } from "express";
import { User } from "../models/user-model";
import { Profile } from "../models/profile-model";
export class ProfileController {
  static async create(
    req: Request<{}, {}, { detail_info: string; user_id: number }>,
    res: Response
  ): Promise<any> {
    const profile = await Profile.create({ ...req.body });
    if (profile) {
      return res.status(201).json({
        message: "Profile created successfully",
        data: profile.dataValues,
      });
    } else {
      return res.status(500).json({ message: "Error" });
    }
  }

  static async readAll(req: Request, res: Response): Promise<any> {
    const profiles = await Profile.findAll({ include: User });
    if (profiles) {
      return res.status(200).json({ message: "All data", data: profiles });
    } else {
      return res.status(500).json({ message: "Error" });
    }
  }
}
