import { Router, Request, Response } from "express";
import { Portfolio } from "../models/Portfolio.js";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
	try {
		const portfolios = await Portfolio.find();
		res.status(200).json(portfolios);
	} catch (error: any) {
		res.status(500).json({
			message: "something went wrong",
			error: error.message,
		});
	}
});

router.post("/", async (req: Request, res: Response) => {
	try {
		const newPortfolio = new Portfolio(req.body);
		const savedPortfolio = await newPortfolio.save();
		res.status(201).json(savedPortfolio);
	} catch (error: any) {
		res.status(400).json({
			message: "Invalid Data",
			error: error.message,
		});
	}
});

export default router;
