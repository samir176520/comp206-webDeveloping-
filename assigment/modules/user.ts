import { Request, Response } from "express";
import { User } from "../types/user";

let users : User[] = [
	{userid:1,name:"joo",age:20},
	{userid:2,name:"samir",age:30},
	{userid:3,name:"ahmed",age:25}
	
];

export function getusers(req: Request, res: Response) {
    res.status(200).json(users);
}

export function getuser(req: Request, res: Response) {
    const userId = +req.params.id;
    if (isNaN(userId)) {
    	res.status(404).json({ message: "Invaild Id" });
    }
    const user = users.find((u) => u.userid === userId);

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "user not found" });
    }
}
export function postuser(req: Request, res: Response) {
    const newuser = req.body;
    users.push({userid:users.length+1,...newuser});
    res.status(201).send(newuser)
}
export function deletuser(req: Request, res: Response) {
    const userid=+req.params.id;
    if(isNaN(userid))
        res.status(404).send({message:"invaled ID"})
    const userindex=users.findIndex(u=>u.userid==userid)
    if(userindex!==-1)
    {
        users=users.filter(u=>u.userid!==userid)
        res.status(200).send({message:"user deleted succfule"})
    }
    else
        res.status(404).send({message:"ID Not found"});

}