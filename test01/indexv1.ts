import express, { Request, Response } from 'express';

interface Car {
  id: number;
  brand: string;
  model: string;
  class: 'A' | 'B' | 'C';
}

interface User {
  id: number;
  name: string;
  age: number;
}

interface Interest {
  id: number;
  userId: number;
  carId: number;
}

let cars: Car[] = [];
let users: User[] = [];
let interests: Interest[] = [];
let nextCarId = 1;
let nextUserId = 1;
let nextInterestId = 1;

const app = express();
app.use(express.json());

// Cars endpoints
app.get('/cars', (req: Request, res: Response) : void => {
  res.json(cars);
});

app.get('/cars/:id', (req: Request, res: Response) : void => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: 'Invalid car ID' });
    return
  }
  const car = cars.find(c => c.id === id);
  if (!car) {
    res.status(404).json({ error: 'Car not found' });
  }
  res.json(car);
});

app.post('/cars', (req: Request, res: Response) : void => {
  const { brand, model, class: carClass } = req.body;
  if (!brand || !model || !carClass) {
    res.status(400).json({ error: 'Missing required fields: brand, model, class' });
  }
  if (!['A', 'B', 'C'].includes(carClass)) {
    res.status(400).json({ error: 'Invalid class. Must be A, B, or C' });
    return
  }
  const newCar: Car = { id: nextCarId++, brand, model, class: carClass };
  cars.push(newCar);
  res.status(201).json(newCar);
});

app.delete('/cars/:id', (req: Request, res: Response) : void => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: 'Invalid car ID' });
    return
  }
  const index = cars.findIndex(c => c.id === id);
  if (index === -1) {
    res.status(404).json({ error: 'Car not found' });
  }
  cars.splice(index, 1);
  res.status(204).send();
});

// Users endpoints
app.post('/users', (req: Request, res: Response) : void => {
  const { name, age } = req.body;
  if (!name || age === undefined) {
    res.status(400).json({ error: 'Missing required fields: name, age' });
    return
  }
  if (typeof age !== 'number' || age < 0) {
    res.status(400).json({ error: 'Invalid age. Must be a non-negative number' });
    return
  }
  const newUser: User = { id: nextUserId++, name, age };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.get('/users/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: 'Invalid user ID' });
    return
  }
  const user = users.find(u => u.id === id);
  if (!user) {
    res.status(404).json({ error: 'User not found' });
    return
  }
  res.json(user);
});

app.delete('/users/:id', (req: Request, res: Response) : void => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: 'Invalid user ID' });
    return
  }
  const index = users.findIndex(u => u.id === id);
  if (index === -1) {
    res.status(404).json({ error: 'User not found' });
    return
  }
  users.splice(index, 1);
  res.status(204).send();
});

// Interests endpoints
app.post('/interests', (req: Request, res: Response) : void => {
  const userId = Number(req.body.userId);
  const carId = Number(req.body.carId);
  if (isNaN(userId) || isNaN(carId)) {
    res.status(400).json({ error: 'Invalid userId or carId' });
    return
  }
  const user = users.find(u => u.id === userId);
  const car = cars.find(c => c.id === carId);
  if (!user || !car) {
    res.status(404).json({ error: 'User or car not found' });
  }
  const newInterest: Interest = { id: nextInterestId++, userId, carId };
  interests.push(newInterest);
  res.status(201).json(newInterest);
});

app.get('/interests/user/:userId', (req: Request, res: Response) : void => {
  const userId = parseInt(req.params.userId);
  if (isNaN(userId)) {
    res.status(400).json({ error: 'Invalid user ID' });
    return
  }
  const userExists = users.some(u => u.id === userId);
  if (!userExists) {
    res.status(404).json({ error: 'User not found' });
    return
  }
  const userInterests = interests.filter(i => i.userId === userId);
  const carsInterested = userInterests
    .map(i => cars.find(c => c.id === i.carId))
    .filter(car => car !== undefined);
  res.json(carsInterested);
});

const port = 17652;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});