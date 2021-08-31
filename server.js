import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./cofig/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();
import cors from "cors";

const app = express();

console.log(process.env.PORT.bold.underline)

app.use(cors());

app.get("/", (req, res) => {
  res.send("Api is runnung..........!");
});

app.use("/api/products", productRoutes);

app.use((err, req, res, next) => {
  const statusCode = req.statusCode === 200 ? 500 : req.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
  
});

const PORT = process.env.PORT || 5000;
app.listen( process.env.PORT, ()=> { console.log(  `server is listning on ${process.env.NODE_ENV} mode on Port ${PORT}`
.yellow.bold)}

)
