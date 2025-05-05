import express from "express";
import { addUser, getUserById, removeUser } from "../modules/userService";
import { User } from "../types";

const router = express.Router();

router.post("/", (req, res) => { // rellative path not the root of root page
  const user: User = req.body;
  if (isNaN(user.id) || user.id === undefined)
    res.send("Error in user id").status(400)
  else if (isNaN(user.age) || user.age === undefined)
    res.send("Error in user age").status(400)
  else if (user.name === undefined)
    res.send("Error: user name is empty").status(400)
  else {
    addUser(user);
    res.send("User added!");
  }
});

router.get("/:id", (req, res) => {

  const id = Number(req.params.id) as number 
    if (isNaN(id) || id === undefined)
      res.send("Error: NonValid ID").status(400)
    else
      res.send(getUserById(id));
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id) || id === undefined)
    res.send("Error: NonValid ID").status(400)
  else
  {
    removeUser(id);
    res.send("User removed!");
  }
});

export default router;