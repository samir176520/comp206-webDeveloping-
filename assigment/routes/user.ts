import { Router } from "express";
import * as user from "../modules/user";

export const userRouter = Router();

userRouter.get("/", user.getusers);
userRouter.get("/:id", user.getuser);
userRouter.post("/", user.postuser);
userRouter.delete("/:id",user.deletuser)