import printerIcon from "../images/printerIcon.png";
import chatIcon from "../images/chatIcon.png";
import webDesignIcon from "../images/webDesignIcon.png";
import developmentIcon from "../images/developmentIcon.png";

interface serviceCells {
	id: string;
	icon: string;
	title: string;
	description: string;
}

export const servicesData: serviceCells[] = [
	{
		id: "s1",
		icon: printerIcon,
		title: "Graphic Design",
		description:
			"Graphic design is the process of visual communication and problem-solving using one or more of typography, photography and illustration.",
	},
	{
		id: "s2",
		icon: webDesignIcon,
		title: "Web Design",
		description:
			"Web design encompasses many different skills and disciplines in the production and maintenance of websites.",
	},
	{
		id: "s3",
		icon: chatIcon,
		title: "UI & UX",
		description:
			"Process of enhancing user satisfaction with a product by improving the usability, accessibility, and pleasure provided in the interaction.",
	},
	{
		id: "s4",
		icon: developmentIcon,
		title: "Web Development",
		description:
			"Web development is a broad term for the work involved in developing a web site for the Internet or an intranet.",
	},
];
