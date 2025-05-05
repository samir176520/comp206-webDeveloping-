import express from "express";
import carRoutes from "./routers/carRoute";
import userRoutes from "./routers/userRoute";
import interestRoutes from "./routers/interstRoute";

const app = express();

app.use(express.json());

app.use("/cars", carRoutes);
app.use("/users", userRoutes);
app.use("/interests", interestRoutes);

app.listen(3000, () => {
  console.log(" Server running on http://localhost:3000");
});