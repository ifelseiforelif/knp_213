import { Router } from "express";
const userRoutes = Router();
userRoutes.get("/user/signin", (req, res) => {
  res.render("form_auth");
});

userRoutes.get("/user/signup", (req, res) => {
  res.render("form_register");
});
export default userRoutes;
