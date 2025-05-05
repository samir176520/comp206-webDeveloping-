import express from "express";
import { addInterest, getInterestsByUserId } from "../modules/interstService";
import { Interest } from "../types";

const router = express.Router();

router.post("/", (req, res) => {
  const interest= req.body;
  if (isNaN(interest.id) || interest.id === undefined)
    res.send("Error: NonValid ID").status(400)
  else if (interest.carId || interest.carId === undefined)
    res.send("Error: NonValid ID").status(400)
  addInterest(interest);
  res.send("Interest added!");
});

router.get("/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  res.json(getInterestsByUserId(userId));
});

export default router;