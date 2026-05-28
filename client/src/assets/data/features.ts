import { FlaskIcon } from "../images/icons/FlaskIcon";
import { GlobeIcon } from "../images/icons/GlobeIcon";
import { IdeaIcon } from "../images/icons/IdeaIcon";

interface featuresData {
	id: string;
	title: string;
	description: string;
	icon: React.ComponentType;
}

export const features: featuresData[] = [
	{
		id: "1",
		title: "Tell Us Your Idea",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
		icon: IdeaIcon,
	},
	{
		id: "2",
		title: "We Will Do All The Work",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
		icon: FlaskIcon,
	},
	{
		id: "3",
		title: "Your Product is Worldwide",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
		icon: GlobeIcon,
	},
];
