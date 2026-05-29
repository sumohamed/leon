import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import portfolioRoutes from "../routes/portfolioRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "";

app.use(cors());
app.use(express.json());

mongoose
	.connect(MONGO_URI)
	.then(() => {
		console.log("Successfully connected to MongoDB Atlas! 🍃");
	})
	.catch((error) => {
		console.error("Error connecting to MongoDB:", error.message);
	});

app.use("/api/portfolios", portfolioRoutes);

app.listen(PORT, () => {
	console.log(`[nodemon] Server is running on port ${PORT}`);
});
