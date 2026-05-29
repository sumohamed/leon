import { Schema, model } from "mongoose";

interface Slot {
	type: "text_only" | "mix_content" | "image_only";
	text01?: string;
	text02?: string;
	content?: string;
	image?: string;
}

interface Portfolio {
	title: string;
	introTxt: string;
	introImg: string;
	mainImage: string;
	category: string;
	author: string;
	year: string;
	slots: Slot[];
}

const slotSchema = new Schema<Slot>({
	type: {
		type: String,
		required: true,
		enum: ["text_only", "mix_content", "image_only"],
	},
	text01: { type: String },
	text02: { type: String },
	content: { type: String },
	image: { type: String },
});

const portfolioSchema = new Schema<Portfolio>(
	{
		title: { type: String, required: true },
		introTxt: { type: String, required: true },
		introImg: { type: String, required: true },
		mainImage: { type: String, required: true },
		category: { type: String, required: true },
		author: { type: String, required: true },
		year: { type: String, required: true },
		slots: { type: [slotSchema], required: true },
	},
	{ timestamps: true },
);

export const Portfolio = model<Portfolio>("Portfolio", portfolioSchema);
