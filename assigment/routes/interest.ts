import { Router } from "express";
import * as interest from "../modules/interest"

export const interestsRouter = Router()
interestsRouter.post("/",interest.postinterest)
interestsRouter.get("/:id",interest.getinterest)
