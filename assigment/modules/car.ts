import { Request,Response } from "express"
import {Car} from "../types/car"
let cars:Car[]=[
    {carId:1,brand:"BMW",model:2020,carclass:"A"},
    {carId:2,brand:"honda",model:2013,carclass:"C"},
    {carId:3,brand:"marceds",model:2024,carclass:"A"},
    {carId:4,brand:"BMW",model:2017,carclass:"A"}
]
export function Getcars(req:Request,res:Response)
{
    res.status(200).json(cars)
}
export function Getcar(req: Request, res: Response) {
    const carId = +req.params.id;
    if (isNaN(carId)) {
    	res.status(404).json({ message: "Invaild Id" });
    }
    const car = cars.find((c) => c.carId === carId);

    if (car) {
        res.status(200).json(car);
    } else {
        res.status(404).json({ message: "car not found" });
    }
}
export function postcar(req: Request, res: Response) {
    const newcar = req.body;
    if (!newcar.brand || !newcar.model || !["A", "B", "C"].includes(newcar.carclass)) 
    {
        res.status(400).json({ message: "Invalid car data" });
    }
    cars.push({carId:cars.length+1,...newcar});
    res.status(201).send(newcar)
}
export function deletcar(req: Request, res: Response) {
    const carid=+req.params.id;
    if(isNaN(carid))
        res.status(404).send({message:"invaled ID"})
    const carindex=cars.findIndex(c=>c.carId==carid)
    if(carindex!==-1)
    {
        cars=cars.filter(c=>c.carId!==carid)
        res.status(200).send({message:"car deleted succfule"})
    }
    else
        res.status(404).send({message:"ID Not found"});

}