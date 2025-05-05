import {Interest} from "../types/interest"
import { Request,Response } from "express";
let interests :Interest[]=[
    {UserId:1, CarId:1},
    {UserId:1, CarId:2},
    {UserId:1, CarId:3},
    {UserId:2, CarId:5},
    {UserId:3, CarId:1}
];
export function postinterest(req:Request,res:Response){
    let newinterest=req.body;
    if(newinterest)
    {
        interests.push(newinterest);
        res.status(201).json({...newinterest})
    }
    else
        res.send({Message:"Invaild interest"})
}

export function getinterest(req:Request,res:Response){
    let id=+req.params.id
    if(isNaN(id))
        res.status(404).json({ message: "Invaild Id" });
    const IDinterest:Interest[]=interests.filter(i=>i.UserId===id)
    if(IDinterest.length)
        res.json(IDinterest)
    else
    res.status(200).json({ message: "cannot find interests" });
}