import { Car } from "../types";

const cars: Car[] = [];

export const addCar = (car: Car) => cars.push(car);

export const getAllCars = () => cars;

export const getCarById = (id: number) => cars[id];

export const deleteCar = (id: number) =>
  cars.filter((car, index) => index !== id);