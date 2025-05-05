import express from 'express';
import { userRouter } from './routes/user';
import { carRouter } from './routes/car';
import { interestsRouter } from './routes/interest';

const app = express(); 
const port : number = 5000;
const host : string = 'localhost'; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welocme to The Car Store API'); 
});

app.use("/users", userRouter);
app.use("/cars",carRouter)
app.use("/interests",interestsRouter)
app.listen(port, host, () => { 
  console.log(`Server is running at http://localhost:${port}`);
});