import portImg from "../images/services.jpg";
import mainPortfolioImage from "../images/heroHome.jpg";

interface SlotTextItem {
	type: "text_only";
	text01: string;
	text02: string;
}

interface SlotMixItem {
	type: "mix_content";
	image: string;
	content: string;
}

interface SlotImageItem {
	type: "image_only";
	image: string;
}

type PortfolioSlot = SlotTextItem | SlotMixItem | SlotImageItem;

interface portfolioCells {
	id: string;
	title: string;
	introTxt: string;
	introImg: string;

	mainImage: string;
	category: string;
	author: string;
	year: string;

	slots: PortfolioSlot[];
}

export const portfolioData: portfolioCells[] = [
	{
		id: "1",
		title: "Branding Stationary Project",
		introTxt:
			"My creative ability is very difficult to measure because it can manifest in so many surprising and.",
		introImg: portImg,
		mainImage: mainPortfolioImage,
		category: "branding/ideas",
		author: "graphberry",
		year: "2019",
		slots: [
			{
				type: "text_only",
				text01:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui",
				text02:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu ",
			},
			{ type: "image_only", image: mainPortfolioImage },
			{
				type: "mix_content",
				content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu",
				image: mainPortfolioImage,
			},
			{
				type: "mix_content",
				content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu",
				image: mainPortfolioImage,
			},
		],
	},
	{
		id: "2",
		title: "Branding Stationary Project",
		introTxt:
			"My creative ability is very difficult to measure because it can manifest in so many surprising and.",
		introImg: portImg,
		mainImage: mainPortfolioImage,
		category: "branding/ideas",
		author: "graphberry",
		year: "2019",
		slots: [
			{
				type: "text_only",
				text01:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui",
				text02:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu",
			},
			{ type: "image_only", image: mainPortfolioImage },
			{
				type: "mix_content",
				content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu",
				image: mainPortfolioImage,
			},
			{
				type: "mix_content",
				content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu",
				image: mainPortfolioImage,
			},
		],
	},
	{
		id: "3",
		title: "Branding Stationary Project",
		introTxt:
			"My creative ability is very difficult to measure because it can manifest in so many surprising and.",
		introImg: portImg,
		mainImage: mainPortfolioImage,
		category: "branding/ideas",
		author: "graphberry",
		year: "2019",
		slots: [
			{
				type: "text_only",
				text01:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui",
				text02:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu",
			},
			{ type: "image_only", image: mainPortfolioImage },
			{
				type: "mix_content",
				content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu",
				image: mainPortfolioImage,
			},
			{
				type: "mix_content",
				content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu",
				image: mainPortfolioImage,
			},
		],
	},
];
