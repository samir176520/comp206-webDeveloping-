import { Router } from "express";
import * as car from "../modules/car";

export const carRouter = Router();

carRouter.get("/", car.Getcars);
carRouter.get("/:id", car.Getcar);
carRouter.post("/", car.postcar);
carRouter.delete("/:id", car.deletcar);