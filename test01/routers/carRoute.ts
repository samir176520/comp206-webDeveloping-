import express from "express";
import {
  addCar,
  deleteCar,
  getAllCars,
  getCarById,
} from "../modules/carService";
import { Car } from "../types";
import { body } from "express-validator";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(getAllCars());
});

router.post('/', (req, res) : void => {
  const { brand, model, class: carClass } = req.body;
  if (!brand || !model || !carClass) {
    res.status(400).json({ error: 'Missing required fields: brand, model, class' });
  }
})

router.get("/:id", (req``, res) => {
  const id = Number(req.params.id);
  res.json(getCarById(id));
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  deleteCar(id);
  res.send("Car deleted!");
});

export default router